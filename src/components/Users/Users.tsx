import React, {useEffect} from "react"
import styles from "./users.module.css"
import userPhoto from "../../assets/images/user.png"
import { NavLink, useHistory } from "react-router-dom";
import Paginator from "./Paginator";
import {UsersSearchForm} from "./UsersSearchForm"
import { FilterType, requestUsers  } from "../../Redux/users-reducer";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from "../../Redux/users-selectors";
import {useDispatch, useSelector} from "react-redux"
import * as queryString from "querystring"


export const Users: React.FC = () => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as {term: string; page: string; friend: string}
         
        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch(parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        history.push({
            pathname: "/developers",
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage])


    const onPageChanged = (pageNumber: number) => {
      dispatch(requestUsers(pageNumber, pageSize, filter));
    } 

    const onFilterChange = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const follow = (userId: number) => {
       dispatch(follow(userId))
    } 

    const unfollow = (userId: number) => {
       dispatch(unfollow(userId))
    }
    
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

   let pages = [];
   for (let i=1; i <= pagesCount; i++) {
       pages.push(i);
   }

    return(<div className={styles.usersItems}> 
    
        <UsersSearchForm onFilterChanged={onFilterChange}/>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} /> 
       {
         users.map( u => <div key={u.id}> 
               <span>
                  <div>
                    <NavLink to={"/profile/" + u.id }>
                     <img src={ u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                  </div>
                  <div>
                      { u.followed ? 
                      <button disabled={followingInProgress.some(id => id === u.id)} onClick={ () => { unfollow(u.id);}}>
                          Unfollow</button> : 
                      <button disabled={followingInProgress.some(id => id === u.id)} onClick={ () => { follow(u.id);}}>
                          Follow</button>}
                  </div>
               </span>
               <span>
                   <span>
                       <div>{u.name}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                     {/*<div>{"u.city"}</div>*/}
                     {/*<div>{"u.country"}</div>*/}
                   </span>
               </span>

           </div>)
       }
     </div>)
}

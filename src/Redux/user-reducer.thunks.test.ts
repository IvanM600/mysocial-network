import { getStatus } from './profile-reducer';
import { ResultCodesEnum, APIResponseType } from '../api/api';
import { usersAPI } from './../api/users-api';
import {follow, unfollow, actions} from "./users-reducer"

jest.mock("../api/users-api")

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    message: [],
    data: {}
}

usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

test("success follow thunk", async () => {
    const thunk = follow(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 3))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.toggleFollowingProgress(false, 1))
})

test("success unfollow thunk", async () => {
    const thunk = unfollow(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 3))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.toggleFollowingProgress(false, 1))
})
import authSlice, { invalidateLoggedInUser, authSelector, selectUserIsExist } from "./auth-slice";

describe("test for authSlice", () => {
  const initialState = {
    authEntity: {
      username: null,
      token: null
    },
    status: null,
    error: null
  }

  it("initialize slice with initialValue", () => {
    const action = { type: "unknown" };
    const listSliceInit = authSlice(initialState, action);
    expect(listSliceInit).toBe(initialState);
  });

  it("invalidateLoggedInUserReducer should invalidate user and set initState", () => {
    const authStateMock = {
      authEntity: {
        username: "user",
        token: "fsdf@#Fwefsdfseg23gjv4we0n4n034jb43nv0n04n23v2"
      },
      status: "loaded",
      error: null
    }

    const action = { type: invalidateLoggedInUser.type } // or just invalidateLoggedInUser
    const afterReducerOperation = authSlice(authStateMock, action);
    expect(afterReducerOperation).toStrictEqual(initialState);
  });

  it("authSelector should return auth state", () => {
    const stateMock = {
      popup: {},
      cardSet: {},
      auth: {
        authEntity: {
          username: "user123",
          token: "12321dcdsv2gvrdssdvsd@#Vsdv 23VSDv23"
        },
        status: "fullfiled",
        error: null
      }
    };

    expect(authSelector(stateMock)).toEqual(stateMock.auth);
  })

  it("selectUserIsExist should return false if auth.error is false", () => {
    const stateMock = {
      popup: {},
      cardSet: {},
      auth: {
        authEntity: {
          username: "user123",
          token: "12321dcdsv2gvrdssdvsd@#Vsdv 23VSDv23"
        },
        status: "fullfiled",
        error: false
      }
    };

    expect(selectUserIsExist(stateMock)).toEqual(false);
  })
})
import { useDispatch, useSelector } from "react-redux";

import { selectAuthUser } from "redux-store/auth/selectors";
import { actions } from "redux-store/auth/slice";
import { getUser } from "utils/localStorage";

export default function useAuth() {
  const dispatch = useDispatch();
  const localStorageUser = getUser();
  const stateUser = useSelector(selectAuthUser);
  if (!stateUser && localStorageUser) {
    dispatch(actions.authStart());
  }
  return stateUser;
}

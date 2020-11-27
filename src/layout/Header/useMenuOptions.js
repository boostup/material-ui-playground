import { useDispatch } from "react-redux";

import { actions } from "redux-store/auth/slice";

export default function useMenuOptions() {
  const dispatch = useDispatch();
  return [
    { title: "Account", url: process.env.REACT_APP_AVATAR_MENU_ACCOUNT },
    { title: "Profile", url: process.env.REACT_APP_AVATAR_MENU_PROFILE },
    {
      title: "Logout",
      fn: () => {
        dispatch(actions.logout());
      },
    },
  ];
}

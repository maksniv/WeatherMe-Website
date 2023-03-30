import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

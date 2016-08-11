import { Dispatcher } from 'flux';

const AppDispatcher = new Dispatcher();

export const dispatch = AppDispatcher.dispatch.bind(AppDispatcher);
export const register = AppDispatcher.register.bind(AppDispatcher);


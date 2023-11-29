type AuthResData = {
    token: {
      expiresOn: number;
      token: string;
    };
    usuario: {
      rol: string;
      username: string;
    };
  };
  
  export type AuthState = {
    logedIn: boolean;
    data?: {
      token: string;
      usuario: {
        rol: string;
        username: string;
      };
    };
  };
  
  export const setAuthLocalStorage = (res: AuthResData) => {
    console.log(
      '🚀 ~ file: localstorage.ts:13 ~ setAuthLocalStorage ~ res:',
      res,
    );
    localStorage.setItem(
      'auth',
      JSON.stringify({
        token: res.token,
        usuario: res.usuario,
      }),
    );
  };
  
  export const getAuthLocalStorage = () => {
    const auth = localStorage.getItem('auth');
    if (auth) return JSON.parse(auth) as AuthResData;
  };
  
  export const removeAuthLocalStorage = () => {
    console.log('removing');
    localStorage.removeItem('auth');
    console.log(localStorage.getItem('auth'));
  };
  
  export const validateAuthToken = async () => {
    const auth = getAuthLocalStorage();
    if (!auth) return undefined;
    const date = new Date(auth.token.expiresOn);
    if (date < new Date()) return undefined;
    return {
      token: auth.token.token,
      usuario: auth.usuario,
    };
  };
  
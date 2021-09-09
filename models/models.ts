export enum Locale {
  DE = 'de',
  ES = 'es',
  EN = 'en',
}

interface AbstractPost {
  id: string;
  userId: string;
}

export interface LocalePost extends AbstractPost {
  title: Record<Locale, string>;
  body: Record<Locale, string>;
}

export interface Post extends AbstractPost {
  title: string;
  body: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

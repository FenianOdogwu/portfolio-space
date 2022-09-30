import { Action } from '@ngrx/store';
import aboutMe from './about-me.json';

export const aboutBodyReducer =  (state: string = aboutMe.message.english , action: Action) => {
  switch(action.type) {
    case 'GERMAN':
       return state = aboutMe.message.german;
    case 'ENGLISH':
      return state = aboutMe.message.english;

      default:
        return state;
  }
}

export const aboutHeaderReducer = (state: string = aboutMe.header.english, action: Action) => {

  switch (action.type) {
    case 'GERMAN':
      return state = aboutMe.header.german;
    case 'ENGLISH':
      return state = aboutMe.header.english;

      default:
        return state;
  }

}

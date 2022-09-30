import { Action } from '@ngrx/store';
import aboutMe from './about-me.json';

export const simpleReducer =  (state: string = aboutMe.message.english , action: Action) => {
  console.log(action.type, state);

  switch(action.type) {
    case 'GERMAN':
       return state = aboutMe.message.german;
    case 'ENGLISH':
      return state = aboutMe.message.english;

      default:
        return state;
  }
}

// TODO : We are using our own Jest installation (see dev dependencies).
// We should be using React Script's Jest.
/* eslint-disable import/no-extraneous-dependencies */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

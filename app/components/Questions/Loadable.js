/**
 *
 * Asynchronously loads the component for Questions
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const DEFAULT_DATE_FORMATTING = {
  dateFormat: 'Y-m-d',
  timeFormat: 'g:i a',
  gmtOffset: null,
  timezone: '',
};

export { isToday } from './isToday';
export { isYesterday } from './isYesterday';
export { getDateObjectWithTimezone } from './getDateObjectWithTimezone';
export { getTimeFromNow } from './getTimeFromNow';
export { getRelativeDisplayDate } from './getRelativeDisplayDate';
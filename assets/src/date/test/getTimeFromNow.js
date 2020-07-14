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

/**
 * External dependencies
 */
import moment from 'moment';
import MockDate from 'mockdate';

/**
 * Internal dependencies
 */
import { DEFAULT_DATE_FORMATTING, getTimeFromNow } from '../';

describe('date/getTimeFromNow', () => {
  beforeEach(() => {
    MockDate.set(moment('2013-02-08 09:30'));
  });

  it('should return 2 minutes ago using moment', () => {
    const dateString = moment().subtract(2, 'minutes');
    const formattedDate = getTimeFromNow(dateString, DEFAULT_DATE_FORMATTING);

    expect(formattedDate).toBe('2 minutes ago');
  });

  it('should return an hour ago using moment', () => {
    const dateString = moment().subtract(1, 'hours');
    const formattedDate = getTimeFromNow(dateString, DEFAULT_DATE_FORMATTING);

    expect(formattedDate).toBe('an hour ago');
  });

  it('should return 2 hours ago using moment', () => {
    const dateString = moment().subtract(2, 'hours');
    const formattedDate = getTimeFromNow(dateString, DEFAULT_DATE_FORMATTING);

    expect(formattedDate).toBe('2 hours ago');
  });
});

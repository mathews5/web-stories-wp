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
import { getDateObjectWithTimezone } from '../';

describe('date/getDateObjectWithTimezone', () => {
  const MOCK_UTC_DATE = moment.utc('2020-07-12 11:30');

  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => MOCK_UTC_DATE);
  });
  beforeEach(() => {
    MockDate.set(MOCK_UTC_DATE);
  });

  it('should return UTC by default which is default moment', () => {
    const date = getDateObjectWithTimezone();

    expect(date).toBe('2020-07-12T11:30:00.000Z');
  });

  it('should return 2020-07-12T4:30:00.000Z when timezone is set to America/Los_Angeles', () => {
    const date = getDateObjectWithTimezone({
      gmtOffset: -7,
      timezone: 'America/Los_Angeles',
    });

    expect(date).toBe('2020-07-12T04:30:00-07:00');
  });

  it('should return 2020-07-12T7:30:00.000Z when timezone is set to America/New_York', () => {
    const date = getDateObjectWithTimezone({
      gmtOffset: -4,
      timezone: 'America/New_York',
    });

    expect(date).toBe('2020-07-12T07:30:00-07:00');
  });
});

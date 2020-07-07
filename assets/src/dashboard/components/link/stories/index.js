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
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Link } from '../';

export default {
  title: 'Dashboard/Components/Link',
  component: Link,
};

const CurrentColorLink = styled(Link)`
  color: black;
`;

export const _default = () => {
  return (
    <>
      <Link href="#">{'Demo link extended from Typography'}</Link>
      <br />
      <CurrentColorLink href="#">
        {'Demo link extended from Typography'}
      </CurrentColorLink>
    </>
  );
};
<?php
/**
 * Trait Google Fonts
 *
 * @package   Google\Web_Stories\Traits
 * @copyright 2020 Google LLC
 * @license   https://www.apache.org/licenses/LICENSE-2.0 Apache License 2.0
 * @link      https://github.com/google/web-stories-wp
 */

/**
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

namespace Google\Web_Stories\Traits;

/**
 * Trait Types
 *
 * @package Google\Web_Stories\Traits
 */
trait Google_Fonts {
	/**
	 * Register font in WordPress.
	 *
	 * @param string $font Name of font.
	 * 
	 * @return void
	 */
	public function register_google_font( $font ) {
		wp_register_style(
			$this->get_font_slug( $font ),
			sprintf( 'https://fonts.googleapis.com/css2?family=%s:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap', $font ),
			[],
			WEBSTORIES_VERSION
		);
	}

	/**
	 * Get font slug.
	 *
	 * @param string $font Font name.
	 *
	 * @return string Slug of font.
	 */
	public function get_font_slug( $font ) {
		return sanitize_title( $font ) . '-web-stories-font';
	}
}

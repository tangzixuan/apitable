/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const LookUpFilled: React.FC<IIconProps> = makeIcon({
    Path: ({ colors }) => <>
    <path d="M2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25C1.5 2.66421 1.83579 3 2.25 3H13.75C14.1642 3 14.5 2.66421 14.5 2.25C14.5 1.83579 14.1642 1.5 13.75 1.5H2.25ZM2.25 5.25C1.83579 5.25 1.5 5.58579 1.5 6C1.5 6.41421 1.83579 6.75 2.25 6.75H5.25C5.66421 6.75 6 6.41421 6 6C6 5.58579 5.66421 5.25 5.25 5.25H2.25ZM1.5 10C1.5 9.58579 1.83579 9.25 2.25 9.25H5.25C5.66421 9.25 6 9.58579 6 10C6 10.4142 5.66421 10.75 5.25 10.75H2.25C1.83579 10.75 1.5 10.4142 1.5 10ZM2.25 13C1.83579 13 1.5 13.3358 1.5 13.75C1.5 14.1642 1.83579 14.5 2.25 14.5L13.75 14.5C14.1642 14.5 14.5 14.1642 14.5 13.75C14.5 13.3358 14.1642 13 13.75 13L2.25 13ZM8.87132 6.12147C8.28553 6.70726 8.28553 7.657 8.87132 8.24279C9.45435 8.82582 10.3979 8.82856 10.9844 8.25102C10.9871 8.2482 10.9898 8.2454 10.9926 8.24262C10.9954 8.23985 10.9982 8.23711 11.001 8.2344C11.5784 7.64797 11.5756 6.70447 10.9926 6.12147C10.4069 5.53568 9.45711 5.53568 8.87132 6.12147ZM12.5169 8.70619C13.1962 7.55578 13.0417 6.04923 12.0533 5.06081C10.8817 3.88924 8.98223 3.88924 7.81066 5.06081C6.63909 6.23238 6.63909 8.13188 7.81066 9.30345C8.79914 10.2919 10.3058 10.4464 11.4562 9.76689L13.1139 11.4246C13.4068 11.7175 13.8817 11.7175 14.1746 11.4246C14.4675 11.1317 14.4675 10.6568 14.1746 10.3639L12.5169 8.70619Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'look_up_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25C1.5 2.66421 1.83579 3 2.25 3H13.75C14.1642 3 14.5 2.66421 14.5 2.25C14.5 1.83579 14.1642 1.5 13.75 1.5H2.25ZM2.25 5.25C1.83579 5.25 1.5 5.58579 1.5 6C1.5 6.41421 1.83579 6.75 2.25 6.75H5.25C5.66421 6.75 6 6.41421 6 6C6 5.58579 5.66421 5.25 5.25 5.25H2.25ZM1.5 10C1.5 9.58579 1.83579 9.25 2.25 9.25H5.25C5.66421 9.25 6 9.58579 6 10C6 10.4142 5.66421 10.75 5.25 10.75H2.25C1.83579 10.75 1.5 10.4142 1.5 10ZM2.25 13C1.83579 13 1.5 13.3358 1.5 13.75C1.5 14.1642 1.83579 14.5 2.25 14.5L13.75 14.5C14.1642 14.5 14.5 14.1642 14.5 13.75C14.5 13.3358 14.1642 13 13.75 13L2.25 13ZM8.87132 6.12147C8.28553 6.70726 8.28553 7.657 8.87132 8.24279C9.45435 8.82582 10.3979 8.82856 10.9844 8.25102C10.9871 8.2482 10.9898 8.2454 10.9926 8.24262C10.9954 8.23985 10.9982 8.23711 11.001 8.2344C11.5784 7.64797 11.5756 6.70447 10.9926 6.12147C10.4069 5.53568 9.45711 5.53568 8.87132 6.12147ZM12.5169 8.70619C13.1962 7.55578 13.0417 6.04923 12.0533 5.06081C10.8817 3.88924 8.98223 3.88924 7.81066 5.06081C6.63909 6.23238 6.63909 8.13188 7.81066 9.30345C8.79914 10.2919 10.3058 10.4464 11.4562 9.76689L13.1139 11.4246C13.4068 11.7175 13.8817 11.7175 14.1746 11.4246C14.4675 11.1317 14.4675 10.6568 14.1746 10.3639L12.5169 8.70619Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});

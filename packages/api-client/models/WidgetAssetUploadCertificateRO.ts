/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* widget file upload certificate ro
*/
export class WidgetAssetUploadCertificateRO {
    /**
    * the file names， max: 20. when fileType asset, it need
    */
    'filenames'?: Array<string>;
    /**
    * file type：0：asset; 1：package; 2: public
    */
    'fileType': number;
    /**
    * the amount of token, max: 20. when fileType no asset, it need
    */
    'count'?: number;
    /**
    * the package\'s version. when fileType package, it need
    */
    'version'?: string;
    /**
    * the file extend name. when fileType package, it optional, such as: .js
    */
    'fileExtName'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filenames",
            "baseName": "filenames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "fileType",
            "baseName": "fileType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileExtName",
            "baseName": "fileExtName",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WidgetAssetUploadCertificateRO.attributeTypeMap;
    }

    public constructor() {
    }
}

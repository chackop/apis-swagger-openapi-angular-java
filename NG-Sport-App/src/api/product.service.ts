/**
 * H Plus Sports API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
} from "@angular/common/http";
import { CustomHttpUrlEncodingCodec } from "../encoder";

import { Observable } from "rxjs/Observable";

import { InlineResponse500 } from "../model/inlineResponse500";
import { Product } from "../model/product";

import { BASE_PATH, COLLECTION_FORMATS } from "../variables";
import { Configuration } from "../configuration";

@Injectable()
export class ProductService {
  protected basePath =
    "https://virtserver.swaggerhub.com/chackop/catalog/1.0.0";
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = "multipart/form-data";
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   *
   * @param pageNumber Page number to return
   * @param pageSize Number of results in the page
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public productGet(
    pageNumber?: number,
    pageSize?: number,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<Array<Product>>;
  public productGet(
    pageNumber?: number,
    pageSize?: number,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<Product>>>;
  public productGet(
    pageNumber?: number,
    pageSize?: number,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<Product>>>;
  public productGet(
    pageNumber?: number,
    pageSize?: number,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (pageNumber !== undefined && pageNumber !== null) {
      queryParameters = queryParameters.set("pageNumber", <any>pageNumber);
    }
    if (pageSize !== undefined && pageSize !== null) {
      queryParameters = queryParameters.set("pageSize", <any>pageSize);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Array<Product>>(`${this.basePath}/product`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   *
   * Add a product to the catalog
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public productPost(
    body?: Product,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<any>;
  public productPost(
    body?: Product,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public productPost(
    body?: Product,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public productPost(
    body?: Product,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // authentication (password) required
    if (this.configuration.accessToken) {
      const accessToken =
        typeof this.configuration.accessToken === "function"
          ? this.configuration.accessToken()
          : this.configuration.accessToken;
      headers = headers.set("Authorization", "Bearer " + accessToken);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ["application/json"];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<any>(`${this.basePath}/product`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   *
   *
   * @param productId
   * @param customerSecurityHeader
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public productProductIdGet(
    productId: number,
    customerSecurityHeader?: number,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<Product>;
  public productProductIdGet(
    productId: number,
    customerSecurityHeader?: number,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<Product>>;
  public productProductIdGet(
    productId: number,
    customerSecurityHeader?: number,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<Product>>;
  public productProductIdGet(
    productId: number,
    customerSecurityHeader?: number,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (productId === null || productId === undefined) {
      throw new Error(
        "Required parameter productId was null or undefined when calling productProductIdGet."
      );
    }

    let headers = this.defaultHeaders;
    if (
      customerSecurityHeader !== undefined &&
      customerSecurityHeader !== null
    ) {
      headers = headers.set(
        "customer-security-header",
        String(customerSecurityHeader)
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Product>(
      `${this.basePath}/product/${encodeURIComponent(String(productId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}

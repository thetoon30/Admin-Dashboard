import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';

@Injectable()
export class FileUploadService {
    /**
     * @param Observable<number>
     */
    private progress$: Observable<number>;

    /**
     * @type {number}
     */
    private progress: number = 0;

    private progressObserver: any;

    constructor() {
        //this.progress$ = new Observable<number>((observer: Observer<number>) => {
        //    this.progressObserver = observer
        //});
    }

    /**
     * @returns {Observable<number>}
     */
    public getObserver(): Observable<number> {
        return this.progress$;
    }

    /**
     * Upload files through XMLHttpRequest
     *
     * @param url
     * @param files
     * @returns {Promise<T>}
     */
    public upload(url: string, file: File, getSecurityHeaders: { name: string, val: string}): Promise<any> {
        return new Promise((resolve, reject) => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            //for (let i = 0; i < files.length; i++) {
            //    formData.append("uploads[]", files[i], files[i].name);
            //}

            formData.append('uploadFile', file);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            //FileUploadService.setUploadUpdateInterval(500);

            //xhr.upload.onprogress = (event) => {
            //    this.progress = Math.round(event.loaded / event.total * 100);

            //    this.progressObserver.next(this.progress);
            //};

            xhr.open('POST', url, true);
            xhr.setRequestHeader(getSecurityHeaders.name, getSecurityHeaders.val);
            xhr.send(formData);
        });
    }

    public uploads(url: string, files: File[], getSecurityHeaders: { name: string, val: string }): Promise<any> {
        return new Promise((resolve, reject) => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploadFile[]", files[i], files[i].name);
            }

            //formData.append('uploadFile', file);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            //FileUploadService.setUploadUpdateInterval(500);

            //xhr.upload.onprogress = (event) => {
            //    this.progress = Math.round(event.loaded / event.total * 100);

            //    this.progressObserver.next(this.progress);
            //};

            xhr.open('POST', url, true);
            xhr.setRequestHeader(getSecurityHeaders.name, getSecurityHeaders.val);
            xhr.send(formData);
        });
    }

    /**
     * Set interval for frequency with which Observable inside Promise will share data with subscribers.
     *
     * @param interval
     */
    private static setUploadUpdateInterval(interval: number): void {
        setInterval(() => { }, interval);
    }
}
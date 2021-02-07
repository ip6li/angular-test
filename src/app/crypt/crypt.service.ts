import {Injectable} from '@angular/core';
import {X509} from './lib/entry';

export interface KeyPair {
  privateKeyPEM: string;
  publicKeyPEM: string;
}

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  x509: X509;
  constructor() {

    this.x509 = new X509('myX509', true);
  }

  loadConfig(configURL): any {
    return this.x509.loadConfig(configURL);
  }

  login(credentials): any {
    return this.x509.login(credentials).then((data) => {
      return data;
    });
  }

  cryptFetch(message): any {
    return this.x509.cryptFetch(message).then((data) => {
      return data;
    });
  }

  getRandom(): any {
    return this.x509.getRandom();
  }

  genKey(): Promise<any> {
    return this.x509.genKey();
  }

  createPKCS10(keyPair, request): any {
    return this.x509.createPKCS10(keyPair, request);
  }

  setCertificate(crt: string): void {
    this.x509.setCertificate(crt);
  }



}

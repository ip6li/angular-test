import {Component, OnInit, AfterViewInit} from '@angular/core';
import {CryptService} from './crypt.service';

@Component({
  selector: 'app-crypt',
  templateUrl: './crypt.component.html',
  styleUrls: ['./crypt.component.css']
})
export class CryptComponent implements OnInit, AfterViewInit {
  random: any;
  privateKey: string;
  publicKey: string;
  pkcs10: string;

  constructor(private x509: CryptService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const request = {
      cn: 'My CN'
    };
    setTimeout(() => {
      this.random = this.x509.getRandom();
      this.x509.genKey().then((lKey: any) => {
        this.privateKey = lKey.privateKeyPEM;
        this.publicKey = lKey.publicKeyPEM;
        try {
          this.x509.createPKCS10(lKey, request).then((lPkcs10: any) => {
            this.pkcs10 = lPkcs10;
          });
        } catch (e) {
          console.log('%o', e);
        }
      });
    });
  }

  getRandom(): any {
    return this.random;
  }

  getPrivateKey(): string {
    return this.privateKey;
  }

  getPublicKey(): string {
    return this.publicKey;
  }

  getPKCS10(): any {
    return this.pkcs10;
  }

}

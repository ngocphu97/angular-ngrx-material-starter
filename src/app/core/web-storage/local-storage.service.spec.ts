import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { WebStorageConfiguration, WEB_STORAGE_CONFIGURATION } from './web-storage.config';

describe('LocalStorageService', () => {
  beforeEach(() => {
    const config: WebStorageConfiguration = {
      prefix: 'web_storage',
      allowNull: true
    };
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
        { provide: WEB_STORAGE_CONFIGURATION, useValue: config }
      ]
    });
  });

  function setup() {
    const service: LocalStorageService = TestBed.get(LocalStorageService);

    return { service };
  }

  it('should be created', () => {
    const { service } = setup();
    expect(service).toBeTruthy();
  });

});

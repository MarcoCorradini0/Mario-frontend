import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { inject } from '@vercel/analytics';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// Inject Vercel Web Analytics
inject();

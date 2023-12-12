// apollo-service.module.ts

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';

@NgModule({
  imports: [
    ApolloModule,
    HttpClientModule
  ],
})
export class ApolloServiceModule {}

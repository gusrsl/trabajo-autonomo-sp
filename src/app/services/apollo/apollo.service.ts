import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(private apollo: Apollo) {}

  query<T>(query: string, variables?: any): Observable<T> {
    return this.apollo.query({
      query: gql(query),
      variables,
    }).pipe(
      map((result: any) => {
        if (result.errors) {
          throw new Error(result.errors[0].message);
        }
        return result.data;
      })
    );
  }

  mutate<T>(mutation: string, variables?: any): Observable<T> {
    return this.apollo.mutate({
      mutation: gql(mutation),
      variables,
    }).pipe(
      map((result: any) => {
        if (result.errors) {
          throw new Error(result.errors[0].message);
        }
        return result.data;
      })
    );
  }
}

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type City = {
  __typename?: 'City';
  continent: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  overall: Scalars['Int'];
  people: Scalars['Int'];
  planet: Scalars['Int'];
  profit: Scalars['Int'];
  slug: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allCities: Array<City>;
  getCity?: Maybe<City>;
};


export type QueryGetCityArgs = {
  slug: Scalars['String'];
};

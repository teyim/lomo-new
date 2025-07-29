
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Background
 * 
 */
export type Background = $Result.DefaultSelection<Prisma.$BackgroundPayload>
/**
 * Model LayoutElement
 * 
 */
export type LayoutElement = $Result.DefaultSelection<Prisma.$LayoutElementPayload>
/**
 * Model Layout
 * 
 */
export type Layout = $Result.DefaultSelection<Prisma.$LayoutPayload>
/**
 * Model AssetCategory
 * 
 */
export type AssetCategory = $Result.DefaultSelection<Prisma.$AssetCategoryPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LayoutElementType: {
  HEADING: 'HEADING',
  SUBHEADING: 'SUBHEADING',
  IMAGE: 'IMAGE'
};

export type LayoutElementType = (typeof LayoutElementType)[keyof typeof LayoutElementType]

}

export type LayoutElementType = $Enums.LayoutElementType

export const LayoutElementType: typeof $Enums.LayoutElementType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Backgrounds
 * const backgrounds = await prisma.background.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Backgrounds
   * const backgrounds = await prisma.background.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.background`: Exposes CRUD operations for the **Background** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Backgrounds
    * const backgrounds = await prisma.background.findMany()
    * ```
    */
  get background(): Prisma.BackgroundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layoutElement`: Exposes CRUD operations for the **LayoutElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LayoutElements
    * const layoutElements = await prisma.layoutElement.findMany()
    * ```
    */
  get layoutElement(): Prisma.LayoutElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layout`: Exposes CRUD operations for the **Layout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Layouts
    * const layouts = await prisma.layout.findMany()
    * ```
    */
  get layout(): Prisma.LayoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assetCategory`: Exposes CRUD operations for the **AssetCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetCategories
    * const assetCategories = await prisma.assetCategory.findMany()
    * ```
    */
  get assetCategory(): Prisma.AssetCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Background: 'Background',
    LayoutElement: 'LayoutElement',
    Layout: 'Layout',
    AssetCategory: 'AssetCategory',
    Asset: 'Asset'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "background" | "layoutElement" | "layout" | "assetCategory" | "asset"
      txIsolationLevel: never
    }
    model: {
      Background: {
        payload: Prisma.$BackgroundPayload<ExtArgs>
        fields: Prisma.BackgroundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BackgroundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BackgroundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          findFirst: {
            args: Prisma.BackgroundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BackgroundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          findMany: {
            args: Prisma.BackgroundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>[]
          }
          create: {
            args: Prisma.BackgroundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          createMany: {
            args: Prisma.BackgroundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BackgroundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          update: {
            args: Prisma.BackgroundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          deleteMany: {
            args: Prisma.BackgroundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BackgroundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BackgroundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          aggregate: {
            args: Prisma.BackgroundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackground>
          }
          groupBy: {
            args: Prisma.BackgroundGroupByArgs<ExtArgs>
            result: $Utils.Optional<BackgroundGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BackgroundFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BackgroundAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BackgroundCountArgs<ExtArgs>
            result: $Utils.Optional<BackgroundCountAggregateOutputType> | number
          }
        }
      }
      LayoutElement: {
        payload: Prisma.$LayoutElementPayload<ExtArgs>
        fields: Prisma.LayoutElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayoutElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayoutElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutElementPayload>
          }
          findFirst: {
            args: Prisma.LayoutElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayoutElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutElementPayload>
          }
          findMany: {
            args: Prisma.LayoutElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutElementPayload>[]
          }
          create: {
            args: Prisma.LayoutElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutElementPayload>
          }
          createMany: {
            args: Prisma.LayoutElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LayoutElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutElementPayload>
          }
          update: {
            args: Prisma.LayoutElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutElementPayload>
          }
          deleteMany: {
            args: Prisma.LayoutElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayoutElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LayoutElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutElementPayload>
          }
          aggregate: {
            args: Prisma.LayoutElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayoutElement>
          }
          groupBy: {
            args: Prisma.LayoutElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayoutElementGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LayoutElementFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LayoutElementAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LayoutElementCountArgs<ExtArgs>
            result: $Utils.Optional<LayoutElementCountAggregateOutputType> | number
          }
        }
      }
      Layout: {
        payload: Prisma.$LayoutPayload<ExtArgs>
        fields: Prisma.LayoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          findFirst: {
            args: Prisma.LayoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          findMany: {
            args: Prisma.LayoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>[]
          }
          create: {
            args: Prisma.LayoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          createMany: {
            args: Prisma.LayoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LayoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          update: {
            args: Prisma.LayoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          deleteMany: {
            args: Prisma.LayoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LayoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          aggregate: {
            args: Prisma.LayoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayout>
          }
          groupBy: {
            args: Prisma.LayoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayoutGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LayoutFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LayoutAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LayoutCountArgs<ExtArgs>
            result: $Utils.Optional<LayoutCountAggregateOutputType> | number
          }
        }
      }
      AssetCategory: {
        payload: Prisma.$AssetCategoryPayload<ExtArgs>
        fields: Prisma.AssetCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          findFirst: {
            args: Prisma.AssetCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          findMany: {
            args: Prisma.AssetCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>[]
          }
          create: {
            args: Prisma.AssetCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          createMany: {
            args: Prisma.AssetCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssetCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          update: {
            args: Prisma.AssetCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          deleteMany: {
            args: Prisma.AssetCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetCategoryPayload>
          }
          aggregate: {
            args: Prisma.AssetCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetCategory>
          }
          groupBy: {
            args: Prisma.AssetCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AssetCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AssetCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AssetCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCategoryCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AssetFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AssetAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    background?: BackgroundOmit
    layoutElement?: LayoutElementOmit
    layout?: LayoutOmit
    assetCategory?: AssetCategoryOmit
    asset?: AssetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LayoutCountOutputType
   */

  export type LayoutCountOutputType = {
    elements: number
  }

  export type LayoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | LayoutCountOutputTypeCountElementsArgs
  }

  // Custom InputTypes
  /**
   * LayoutCountOutputType without action
   */
  export type LayoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutCountOutputType
     */
    select?: LayoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LayoutCountOutputType without action
   */
  export type LayoutCountOutputTypeCountElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayoutElementWhereInput
  }


  /**
   * Count Type AssetCategoryCountOutputType
   */

  export type AssetCategoryCountOutputType = {
    assets: number
  }

  export type AssetCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | AssetCategoryCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * AssetCategoryCountOutputType without action
   */
  export type AssetCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategoryCountOutputType
     */
    select?: AssetCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCategoryCountOutputType without action
   */
  export type AssetCategoryCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Background
   */

  export type AggregateBackground = {
    _count: BackgroundCountAggregateOutputType | null
    _min: BackgroundMinAggregateOutputType | null
    _max: BackgroundMaxAggregateOutputType | null
  }

  export type BackgroundMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    imgKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BackgroundMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    imgKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BackgroundCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    imgKey: number
    createdAt: number
    updatedAt: number
    recommendedColors: number
    _all: number
  }


  export type BackgroundMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    imgKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BackgroundMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    imgKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BackgroundCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    imgKey?: true
    createdAt?: true
    updatedAt?: true
    recommendedColors?: true
    _all?: true
  }

  export type BackgroundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Background to aggregate.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Backgrounds
    **/
    _count?: true | BackgroundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackgroundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackgroundMaxAggregateInputType
  }

  export type GetBackgroundAggregateType<T extends BackgroundAggregateArgs> = {
        [P in keyof T & keyof AggregateBackground]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackground[P]>
      : GetScalarType<T[P], AggregateBackground[P]>
  }




  export type BackgroundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackgroundWhereInput
    orderBy?: BackgroundOrderByWithAggregationInput | BackgroundOrderByWithAggregationInput[]
    by: BackgroundScalarFieldEnum[] | BackgroundScalarFieldEnum
    having?: BackgroundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackgroundCountAggregateInputType | true
    _min?: BackgroundMinAggregateInputType
    _max?: BackgroundMaxAggregateInputType
  }

  export type BackgroundGroupByOutputType = {
    id: string
    name: string
    imageUrl: string
    imgKey: string
    createdAt: Date
    updatedAt: Date
    recommendedColors: JsonValue
    _count: BackgroundCountAggregateOutputType | null
    _min: BackgroundMinAggregateOutputType | null
    _max: BackgroundMaxAggregateOutputType | null
  }

  type GetBackgroundGroupByPayload<T extends BackgroundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BackgroundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackgroundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackgroundGroupByOutputType[P]>
            : GetScalarType<T[P], BackgroundGroupByOutputType[P]>
        }
      >
    >


  export type BackgroundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    imgKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recommendedColors?: boolean
  }, ExtArgs["result"]["background"]>



  export type BackgroundSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    imgKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recommendedColors?: boolean
  }

  export type BackgroundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl" | "imgKey" | "createdAt" | "updatedAt" | "recommendedColors", ExtArgs["result"]["background"]>

  export type $BackgroundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Background"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      imageUrl: string
      imgKey: string
      createdAt: Date
      updatedAt: Date
      recommendedColors: Prisma.JsonValue
    }, ExtArgs["result"]["background"]>
    composites: {}
  }

  type BackgroundGetPayload<S extends boolean | null | undefined | BackgroundDefaultArgs> = $Result.GetResult<Prisma.$BackgroundPayload, S>

  type BackgroundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BackgroundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BackgroundCountAggregateInputType | true
    }

  export interface BackgroundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Background'], meta: { name: 'Background' } }
    /**
     * Find zero or one Background that matches the filter.
     * @param {BackgroundFindUniqueArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BackgroundFindUniqueArgs>(args: SelectSubset<T, BackgroundFindUniqueArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Background that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BackgroundFindUniqueOrThrowArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BackgroundFindUniqueOrThrowArgs>(args: SelectSubset<T, BackgroundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Background that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFindFirstArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BackgroundFindFirstArgs>(args?: SelectSubset<T, BackgroundFindFirstArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Background that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFindFirstOrThrowArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BackgroundFindFirstOrThrowArgs>(args?: SelectSubset<T, BackgroundFindFirstOrThrowArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Backgrounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Backgrounds
     * const backgrounds = await prisma.background.findMany()
     * 
     * // Get first 10 Backgrounds
     * const backgrounds = await prisma.background.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backgroundWithIdOnly = await prisma.background.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BackgroundFindManyArgs>(args?: SelectSubset<T, BackgroundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Background.
     * @param {BackgroundCreateArgs} args - Arguments to create a Background.
     * @example
     * // Create one Background
     * const Background = await prisma.background.create({
     *   data: {
     *     // ... data to create a Background
     *   }
     * })
     * 
     */
    create<T extends BackgroundCreateArgs>(args: SelectSubset<T, BackgroundCreateArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Backgrounds.
     * @param {BackgroundCreateManyArgs} args - Arguments to create many Backgrounds.
     * @example
     * // Create many Backgrounds
     * const background = await prisma.background.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BackgroundCreateManyArgs>(args?: SelectSubset<T, BackgroundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Background.
     * @param {BackgroundDeleteArgs} args - Arguments to delete one Background.
     * @example
     * // Delete one Background
     * const Background = await prisma.background.delete({
     *   where: {
     *     // ... filter to delete one Background
     *   }
     * })
     * 
     */
    delete<T extends BackgroundDeleteArgs>(args: SelectSubset<T, BackgroundDeleteArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Background.
     * @param {BackgroundUpdateArgs} args - Arguments to update one Background.
     * @example
     * // Update one Background
     * const background = await prisma.background.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BackgroundUpdateArgs>(args: SelectSubset<T, BackgroundUpdateArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Backgrounds.
     * @param {BackgroundDeleteManyArgs} args - Arguments to filter Backgrounds to delete.
     * @example
     * // Delete a few Backgrounds
     * const { count } = await prisma.background.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BackgroundDeleteManyArgs>(args?: SelectSubset<T, BackgroundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Backgrounds
     * const background = await prisma.background.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BackgroundUpdateManyArgs>(args: SelectSubset<T, BackgroundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Background.
     * @param {BackgroundUpsertArgs} args - Arguments to update or create a Background.
     * @example
     * // Update or create a Background
     * const background = await prisma.background.upsert({
     *   create: {
     *     // ... data to create a Background
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Background we want to update
     *   }
     * })
     */
    upsert<T extends BackgroundUpsertArgs>(args: SelectSubset<T, BackgroundUpsertArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Backgrounds that matches the filter.
     * @param {BackgroundFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const background = await prisma.background.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BackgroundFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Background.
     * @param {BackgroundAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const background = await prisma.background.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BackgroundAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Backgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundCountArgs} args - Arguments to filter Backgrounds to count.
     * @example
     * // Count the number of Backgrounds
     * const count = await prisma.background.count({
     *   where: {
     *     // ... the filter for the Backgrounds we want to count
     *   }
     * })
    **/
    count<T extends BackgroundCountArgs>(
      args?: Subset<T, BackgroundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackgroundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Background.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BackgroundAggregateArgs>(args: Subset<T, BackgroundAggregateArgs>): Prisma.PrismaPromise<GetBackgroundAggregateType<T>>

    /**
     * Group by Background.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BackgroundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BackgroundGroupByArgs['orderBy'] }
        : { orderBy?: BackgroundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BackgroundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackgroundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Background model
   */
  readonly fields: BackgroundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Background.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BackgroundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Background model
   */
  interface BackgroundFieldRefs {
    readonly id: FieldRef<"Background", 'String'>
    readonly name: FieldRef<"Background", 'String'>
    readonly imageUrl: FieldRef<"Background", 'String'>
    readonly imgKey: FieldRef<"Background", 'String'>
    readonly createdAt: FieldRef<"Background", 'DateTime'>
    readonly updatedAt: FieldRef<"Background", 'DateTime'>
    readonly recommendedColors: FieldRef<"Background", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Background findUnique
   */
  export type BackgroundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background findUniqueOrThrow
   */
  export type BackgroundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background findFirst
   */
  export type BackgroundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backgrounds.
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backgrounds.
     */
    distinct?: BackgroundScalarFieldEnum | BackgroundScalarFieldEnum[]
  }

  /**
   * Background findFirstOrThrow
   */
  export type BackgroundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backgrounds.
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backgrounds.
     */
    distinct?: BackgroundScalarFieldEnum | BackgroundScalarFieldEnum[]
  }

  /**
   * Background findMany
   */
  export type BackgroundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Filter, which Backgrounds to fetch.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Backgrounds.
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    distinct?: BackgroundScalarFieldEnum | BackgroundScalarFieldEnum[]
  }

  /**
   * Background create
   */
  export type BackgroundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * The data needed to create a Background.
     */
    data: XOR<BackgroundCreateInput, BackgroundUncheckedCreateInput>
  }

  /**
   * Background createMany
   */
  export type BackgroundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Backgrounds.
     */
    data: BackgroundCreateManyInput | BackgroundCreateManyInput[]
  }

  /**
   * Background update
   */
  export type BackgroundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * The data needed to update a Background.
     */
    data: XOR<BackgroundUpdateInput, BackgroundUncheckedUpdateInput>
    /**
     * Choose, which Background to update.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background updateMany
   */
  export type BackgroundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Backgrounds.
     */
    data: XOR<BackgroundUpdateManyMutationInput, BackgroundUncheckedUpdateManyInput>
    /**
     * Filter which Backgrounds to update
     */
    where?: BackgroundWhereInput
    /**
     * Limit how many Backgrounds to update.
     */
    limit?: number
  }

  /**
   * Background upsert
   */
  export type BackgroundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * The filter to search for the Background to update in case it exists.
     */
    where: BackgroundWhereUniqueInput
    /**
     * In case the Background found by the `where` argument doesn't exist, create a new Background with this data.
     */
    create: XOR<BackgroundCreateInput, BackgroundUncheckedCreateInput>
    /**
     * In case the Background was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BackgroundUpdateInput, BackgroundUncheckedUpdateInput>
  }

  /**
   * Background delete
   */
  export type BackgroundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Filter which Background to delete.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background deleteMany
   */
  export type BackgroundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Backgrounds to delete
     */
    where?: BackgroundWhereInput
    /**
     * Limit how many Backgrounds to delete.
     */
    limit?: number
  }

  /**
   * Background findRaw
   */
  export type BackgroundFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Background aggregateRaw
   */
  export type BackgroundAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Background without action
   */
  export type BackgroundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
  }


  /**
   * Model LayoutElement
   */

  export type AggregateLayoutElement = {
    _count: LayoutElementCountAggregateOutputType | null
    _avg: LayoutElementAvgAggregateOutputType | null
    _sum: LayoutElementSumAggregateOutputType | null
    _min: LayoutElementMinAggregateOutputType | null
    _max: LayoutElementMaxAggregateOutputType | null
  }

  export type LayoutElementAvgAggregateOutputType = {
    positionX: number | null
    positionY: number | null
    width: number | null
    height: number | null
    zIndex: number | null
    fontSize: number | null
  }

  export type LayoutElementSumAggregateOutputType = {
    positionX: number | null
    positionY: number | null
    width: number | null
    height: number | null
    zIndex: number | null
    fontSize: number | null
  }

  export type LayoutElementMinAggregateOutputType = {
    id: string | null
    layoutId: string | null
    type: $Enums.LayoutElementType | null
    label: string | null
    positionX: number | null
    positionY: number | null
    width: number | null
    height: number | null
    zIndex: number | null
    defaultText: string | null
    fontSize: number | null
    color: string | null
    fontFamily: string | null
    fontWeight: string | null
    imageUrl: string | null
  }

  export type LayoutElementMaxAggregateOutputType = {
    id: string | null
    layoutId: string | null
    type: $Enums.LayoutElementType | null
    label: string | null
    positionX: number | null
    positionY: number | null
    width: number | null
    height: number | null
    zIndex: number | null
    defaultText: string | null
    fontSize: number | null
    color: string | null
    fontFamily: string | null
    fontWeight: string | null
    imageUrl: string | null
  }

  export type LayoutElementCountAggregateOutputType = {
    id: number
    layoutId: number
    type: number
    label: number
    positionX: number
    positionY: number
    width: number
    height: number
    zIndex: number
    defaultText: number
    fontSize: number
    color: number
    fontFamily: number
    fontWeight: number
    imageUrl: number
    _all: number
  }


  export type LayoutElementAvgAggregateInputType = {
    positionX?: true
    positionY?: true
    width?: true
    height?: true
    zIndex?: true
    fontSize?: true
  }

  export type LayoutElementSumAggregateInputType = {
    positionX?: true
    positionY?: true
    width?: true
    height?: true
    zIndex?: true
    fontSize?: true
  }

  export type LayoutElementMinAggregateInputType = {
    id?: true
    layoutId?: true
    type?: true
    label?: true
    positionX?: true
    positionY?: true
    width?: true
    height?: true
    zIndex?: true
    defaultText?: true
    fontSize?: true
    color?: true
    fontFamily?: true
    fontWeight?: true
    imageUrl?: true
  }

  export type LayoutElementMaxAggregateInputType = {
    id?: true
    layoutId?: true
    type?: true
    label?: true
    positionX?: true
    positionY?: true
    width?: true
    height?: true
    zIndex?: true
    defaultText?: true
    fontSize?: true
    color?: true
    fontFamily?: true
    fontWeight?: true
    imageUrl?: true
  }

  export type LayoutElementCountAggregateInputType = {
    id?: true
    layoutId?: true
    type?: true
    label?: true
    positionX?: true
    positionY?: true
    width?: true
    height?: true
    zIndex?: true
    defaultText?: true
    fontSize?: true
    color?: true
    fontFamily?: true
    fontWeight?: true
    imageUrl?: true
    _all?: true
  }

  export type LayoutElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayoutElement to aggregate.
     */
    where?: LayoutElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayoutElements to fetch.
     */
    orderBy?: LayoutElementOrderByWithRelationInput | LayoutElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayoutElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayoutElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayoutElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LayoutElements
    **/
    _count?: true | LayoutElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayoutElementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayoutElementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayoutElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayoutElementMaxAggregateInputType
  }

  export type GetLayoutElementAggregateType<T extends LayoutElementAggregateArgs> = {
        [P in keyof T & keyof AggregateLayoutElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayoutElement[P]>
      : GetScalarType<T[P], AggregateLayoutElement[P]>
  }




  export type LayoutElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayoutElementWhereInput
    orderBy?: LayoutElementOrderByWithAggregationInput | LayoutElementOrderByWithAggregationInput[]
    by: LayoutElementScalarFieldEnum[] | LayoutElementScalarFieldEnum
    having?: LayoutElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayoutElementCountAggregateInputType | true
    _avg?: LayoutElementAvgAggregateInputType
    _sum?: LayoutElementSumAggregateInputType
    _min?: LayoutElementMinAggregateInputType
    _max?: LayoutElementMaxAggregateInputType
  }

  export type LayoutElementGroupByOutputType = {
    id: string
    layoutId: string
    type: $Enums.LayoutElementType
    label: string
    positionX: number
    positionY: number
    width: number | null
    height: number | null
    zIndex: number | null
    defaultText: string | null
    fontSize: number | null
    color: string | null
    fontFamily: string | null
    fontWeight: string | null
    imageUrl: string | null
    _count: LayoutElementCountAggregateOutputType | null
    _avg: LayoutElementAvgAggregateOutputType | null
    _sum: LayoutElementSumAggregateOutputType | null
    _min: LayoutElementMinAggregateOutputType | null
    _max: LayoutElementMaxAggregateOutputType | null
  }

  type GetLayoutElementGroupByPayload<T extends LayoutElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayoutElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayoutElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayoutElementGroupByOutputType[P]>
            : GetScalarType<T[P], LayoutElementGroupByOutputType[P]>
        }
      >
    >


  export type LayoutElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layoutId?: boolean
    type?: boolean
    label?: boolean
    positionX?: boolean
    positionY?: boolean
    width?: boolean
    height?: boolean
    zIndex?: boolean
    defaultText?: boolean
    fontSize?: boolean
    color?: boolean
    fontFamily?: boolean
    fontWeight?: boolean
    imageUrl?: boolean
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layoutElement"]>



  export type LayoutElementSelectScalar = {
    id?: boolean
    layoutId?: boolean
    type?: boolean
    label?: boolean
    positionX?: boolean
    positionY?: boolean
    width?: boolean
    height?: boolean
    zIndex?: boolean
    defaultText?: boolean
    fontSize?: boolean
    color?: boolean
    fontFamily?: boolean
    fontWeight?: boolean
    imageUrl?: boolean
  }

  export type LayoutElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "layoutId" | "type" | "label" | "positionX" | "positionY" | "width" | "height" | "zIndex" | "defaultText" | "fontSize" | "color" | "fontFamily" | "fontWeight" | "imageUrl", ExtArgs["result"]["layoutElement"]>
  export type LayoutElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
  }

  export type $LayoutElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LayoutElement"
    objects: {
      layout: Prisma.$LayoutPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      layoutId: string
      type: $Enums.LayoutElementType
      label: string
      positionX: number
      positionY: number
      width: number | null
      height: number | null
      zIndex: number | null
      defaultText: string | null
      fontSize: number | null
      color: string | null
      fontFamily: string | null
      fontWeight: string | null
      imageUrl: string | null
    }, ExtArgs["result"]["layoutElement"]>
    composites: {}
  }

  type LayoutElementGetPayload<S extends boolean | null | undefined | LayoutElementDefaultArgs> = $Result.GetResult<Prisma.$LayoutElementPayload, S>

  type LayoutElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayoutElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayoutElementCountAggregateInputType | true
    }

  export interface LayoutElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LayoutElement'], meta: { name: 'LayoutElement' } }
    /**
     * Find zero or one LayoutElement that matches the filter.
     * @param {LayoutElementFindUniqueArgs} args - Arguments to find a LayoutElement
     * @example
     * // Get one LayoutElement
     * const layoutElement = await prisma.layoutElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayoutElementFindUniqueArgs>(args: SelectSubset<T, LayoutElementFindUniqueArgs<ExtArgs>>): Prisma__LayoutElementClient<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LayoutElement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayoutElementFindUniqueOrThrowArgs} args - Arguments to find a LayoutElement
     * @example
     * // Get one LayoutElement
     * const layoutElement = await prisma.layoutElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayoutElementFindUniqueOrThrowArgs>(args: SelectSubset<T, LayoutElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayoutElementClient<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayoutElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutElementFindFirstArgs} args - Arguments to find a LayoutElement
     * @example
     * // Get one LayoutElement
     * const layoutElement = await prisma.layoutElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayoutElementFindFirstArgs>(args?: SelectSubset<T, LayoutElementFindFirstArgs<ExtArgs>>): Prisma__LayoutElementClient<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayoutElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutElementFindFirstOrThrowArgs} args - Arguments to find a LayoutElement
     * @example
     * // Get one LayoutElement
     * const layoutElement = await prisma.layoutElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayoutElementFindFirstOrThrowArgs>(args?: SelectSubset<T, LayoutElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayoutElementClient<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LayoutElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LayoutElements
     * const layoutElements = await prisma.layoutElement.findMany()
     * 
     * // Get first 10 LayoutElements
     * const layoutElements = await prisma.layoutElement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layoutElementWithIdOnly = await prisma.layoutElement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayoutElementFindManyArgs>(args?: SelectSubset<T, LayoutElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LayoutElement.
     * @param {LayoutElementCreateArgs} args - Arguments to create a LayoutElement.
     * @example
     * // Create one LayoutElement
     * const LayoutElement = await prisma.layoutElement.create({
     *   data: {
     *     // ... data to create a LayoutElement
     *   }
     * })
     * 
     */
    create<T extends LayoutElementCreateArgs>(args: SelectSubset<T, LayoutElementCreateArgs<ExtArgs>>): Prisma__LayoutElementClient<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LayoutElements.
     * @param {LayoutElementCreateManyArgs} args - Arguments to create many LayoutElements.
     * @example
     * // Create many LayoutElements
     * const layoutElement = await prisma.layoutElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayoutElementCreateManyArgs>(args?: SelectSubset<T, LayoutElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LayoutElement.
     * @param {LayoutElementDeleteArgs} args - Arguments to delete one LayoutElement.
     * @example
     * // Delete one LayoutElement
     * const LayoutElement = await prisma.layoutElement.delete({
     *   where: {
     *     // ... filter to delete one LayoutElement
     *   }
     * })
     * 
     */
    delete<T extends LayoutElementDeleteArgs>(args: SelectSubset<T, LayoutElementDeleteArgs<ExtArgs>>): Prisma__LayoutElementClient<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LayoutElement.
     * @param {LayoutElementUpdateArgs} args - Arguments to update one LayoutElement.
     * @example
     * // Update one LayoutElement
     * const layoutElement = await prisma.layoutElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayoutElementUpdateArgs>(args: SelectSubset<T, LayoutElementUpdateArgs<ExtArgs>>): Prisma__LayoutElementClient<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LayoutElements.
     * @param {LayoutElementDeleteManyArgs} args - Arguments to filter LayoutElements to delete.
     * @example
     * // Delete a few LayoutElements
     * const { count } = await prisma.layoutElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayoutElementDeleteManyArgs>(args?: SelectSubset<T, LayoutElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayoutElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LayoutElements
     * const layoutElement = await prisma.layoutElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayoutElementUpdateManyArgs>(args: SelectSubset<T, LayoutElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LayoutElement.
     * @param {LayoutElementUpsertArgs} args - Arguments to update or create a LayoutElement.
     * @example
     * // Update or create a LayoutElement
     * const layoutElement = await prisma.layoutElement.upsert({
     *   create: {
     *     // ... data to create a LayoutElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LayoutElement we want to update
     *   }
     * })
     */
    upsert<T extends LayoutElementUpsertArgs>(args: SelectSubset<T, LayoutElementUpsertArgs<ExtArgs>>): Prisma__LayoutElementClient<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LayoutElements that matches the filter.
     * @param {LayoutElementFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const layoutElement = await prisma.layoutElement.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LayoutElementFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LayoutElement.
     * @param {LayoutElementAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const layoutElement = await prisma.layoutElement.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LayoutElementAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LayoutElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutElementCountArgs} args - Arguments to filter LayoutElements to count.
     * @example
     * // Count the number of LayoutElements
     * const count = await prisma.layoutElement.count({
     *   where: {
     *     // ... the filter for the LayoutElements we want to count
     *   }
     * })
    **/
    count<T extends LayoutElementCountArgs>(
      args?: Subset<T, LayoutElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayoutElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LayoutElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LayoutElementAggregateArgs>(args: Subset<T, LayoutElementAggregateArgs>): Prisma.PrismaPromise<GetLayoutElementAggregateType<T>>

    /**
     * Group by LayoutElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LayoutElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayoutElementGroupByArgs['orderBy'] }
        : { orderBy?: LayoutElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LayoutElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayoutElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LayoutElement model
   */
  readonly fields: LayoutElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LayoutElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayoutElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    layout<T extends LayoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayoutDefaultArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LayoutElement model
   */
  interface LayoutElementFieldRefs {
    readonly id: FieldRef<"LayoutElement", 'String'>
    readonly layoutId: FieldRef<"LayoutElement", 'String'>
    readonly type: FieldRef<"LayoutElement", 'LayoutElementType'>
    readonly label: FieldRef<"LayoutElement", 'String'>
    readonly positionX: FieldRef<"LayoutElement", 'Int'>
    readonly positionY: FieldRef<"LayoutElement", 'Int'>
    readonly width: FieldRef<"LayoutElement", 'Int'>
    readonly height: FieldRef<"LayoutElement", 'Int'>
    readonly zIndex: FieldRef<"LayoutElement", 'Int'>
    readonly defaultText: FieldRef<"LayoutElement", 'String'>
    readonly fontSize: FieldRef<"LayoutElement", 'Int'>
    readonly color: FieldRef<"LayoutElement", 'String'>
    readonly fontFamily: FieldRef<"LayoutElement", 'String'>
    readonly fontWeight: FieldRef<"LayoutElement", 'String'>
    readonly imageUrl: FieldRef<"LayoutElement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LayoutElement findUnique
   */
  export type LayoutElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    /**
     * Filter, which LayoutElement to fetch.
     */
    where: LayoutElementWhereUniqueInput
  }

  /**
   * LayoutElement findUniqueOrThrow
   */
  export type LayoutElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    /**
     * Filter, which LayoutElement to fetch.
     */
    where: LayoutElementWhereUniqueInput
  }

  /**
   * LayoutElement findFirst
   */
  export type LayoutElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    /**
     * Filter, which LayoutElement to fetch.
     */
    where?: LayoutElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayoutElements to fetch.
     */
    orderBy?: LayoutElementOrderByWithRelationInput | LayoutElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayoutElements.
     */
    cursor?: LayoutElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayoutElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayoutElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayoutElements.
     */
    distinct?: LayoutElementScalarFieldEnum | LayoutElementScalarFieldEnum[]
  }

  /**
   * LayoutElement findFirstOrThrow
   */
  export type LayoutElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    /**
     * Filter, which LayoutElement to fetch.
     */
    where?: LayoutElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayoutElements to fetch.
     */
    orderBy?: LayoutElementOrderByWithRelationInput | LayoutElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayoutElements.
     */
    cursor?: LayoutElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayoutElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayoutElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayoutElements.
     */
    distinct?: LayoutElementScalarFieldEnum | LayoutElementScalarFieldEnum[]
  }

  /**
   * LayoutElement findMany
   */
  export type LayoutElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    /**
     * Filter, which LayoutElements to fetch.
     */
    where?: LayoutElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayoutElements to fetch.
     */
    orderBy?: LayoutElementOrderByWithRelationInput | LayoutElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LayoutElements.
     */
    cursor?: LayoutElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayoutElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayoutElements.
     */
    skip?: number
    distinct?: LayoutElementScalarFieldEnum | LayoutElementScalarFieldEnum[]
  }

  /**
   * LayoutElement create
   */
  export type LayoutElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    /**
     * The data needed to create a LayoutElement.
     */
    data: XOR<LayoutElementCreateInput, LayoutElementUncheckedCreateInput>
  }

  /**
   * LayoutElement createMany
   */
  export type LayoutElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LayoutElements.
     */
    data: LayoutElementCreateManyInput | LayoutElementCreateManyInput[]
  }

  /**
   * LayoutElement update
   */
  export type LayoutElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    /**
     * The data needed to update a LayoutElement.
     */
    data: XOR<LayoutElementUpdateInput, LayoutElementUncheckedUpdateInput>
    /**
     * Choose, which LayoutElement to update.
     */
    where: LayoutElementWhereUniqueInput
  }

  /**
   * LayoutElement updateMany
   */
  export type LayoutElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LayoutElements.
     */
    data: XOR<LayoutElementUpdateManyMutationInput, LayoutElementUncheckedUpdateManyInput>
    /**
     * Filter which LayoutElements to update
     */
    where?: LayoutElementWhereInput
    /**
     * Limit how many LayoutElements to update.
     */
    limit?: number
  }

  /**
   * LayoutElement upsert
   */
  export type LayoutElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    /**
     * The filter to search for the LayoutElement to update in case it exists.
     */
    where: LayoutElementWhereUniqueInput
    /**
     * In case the LayoutElement found by the `where` argument doesn't exist, create a new LayoutElement with this data.
     */
    create: XOR<LayoutElementCreateInput, LayoutElementUncheckedCreateInput>
    /**
     * In case the LayoutElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayoutElementUpdateInput, LayoutElementUncheckedUpdateInput>
  }

  /**
   * LayoutElement delete
   */
  export type LayoutElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    /**
     * Filter which LayoutElement to delete.
     */
    where: LayoutElementWhereUniqueInput
  }

  /**
   * LayoutElement deleteMany
   */
  export type LayoutElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayoutElements to delete
     */
    where?: LayoutElementWhereInput
    /**
     * Limit how many LayoutElements to delete.
     */
    limit?: number
  }

  /**
   * LayoutElement findRaw
   */
  export type LayoutElementFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LayoutElement aggregateRaw
   */
  export type LayoutElementAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LayoutElement without action
   */
  export type LayoutElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
  }


  /**
   * Model Layout
   */

  export type AggregateLayout = {
    _count: LayoutCountAggregateOutputType | null
    _min: LayoutMinAggregateOutputType | null
    _max: LayoutMaxAggregateOutputType | null
  }

  export type LayoutMinAggregateOutputType = {
    id: string | null
    name: string | null
    previewimage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayoutMaxAggregateOutputType = {
    id: string | null
    name: string | null
    previewimage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayoutCountAggregateOutputType = {
    id: number
    name: number
    previewimage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LayoutMinAggregateInputType = {
    id?: true
    name?: true
    previewimage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayoutMaxAggregateInputType = {
    id?: true
    name?: true
    previewimage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayoutCountAggregateInputType = {
    id?: true
    name?: true
    previewimage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LayoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layout to aggregate.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Layouts
    **/
    _count?: true | LayoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayoutMaxAggregateInputType
  }

  export type GetLayoutAggregateType<T extends LayoutAggregateArgs> = {
        [P in keyof T & keyof AggregateLayout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayout[P]>
      : GetScalarType<T[P], AggregateLayout[P]>
  }




  export type LayoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayoutWhereInput
    orderBy?: LayoutOrderByWithAggregationInput | LayoutOrderByWithAggregationInput[]
    by: LayoutScalarFieldEnum[] | LayoutScalarFieldEnum
    having?: LayoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayoutCountAggregateInputType | true
    _min?: LayoutMinAggregateInputType
    _max?: LayoutMaxAggregateInputType
  }

  export type LayoutGroupByOutputType = {
    id: string
    name: string
    previewimage: string
    createdAt: Date
    updatedAt: Date
    _count: LayoutCountAggregateOutputType | null
    _min: LayoutMinAggregateOutputType | null
    _max: LayoutMaxAggregateOutputType | null
  }

  type GetLayoutGroupByPayload<T extends LayoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayoutGroupByOutputType[P]>
            : GetScalarType<T[P], LayoutGroupByOutputType[P]>
        }
      >
    >


  export type LayoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    previewimage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    elements?: boolean | Layout$elementsArgs<ExtArgs>
    _count?: boolean | LayoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layout"]>



  export type LayoutSelectScalar = {
    id?: boolean
    name?: boolean
    previewimage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LayoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "previewimage" | "createdAt" | "updatedAt", ExtArgs["result"]["layout"]>
  export type LayoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | Layout$elementsArgs<ExtArgs>
    _count?: boolean | LayoutCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LayoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Layout"
    objects: {
      elements: Prisma.$LayoutElementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      previewimage: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["layout"]>
    composites: {}
  }

  type LayoutGetPayload<S extends boolean | null | undefined | LayoutDefaultArgs> = $Result.GetResult<Prisma.$LayoutPayload, S>

  type LayoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayoutCountAggregateInputType | true
    }

  export interface LayoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Layout'], meta: { name: 'Layout' } }
    /**
     * Find zero or one Layout that matches the filter.
     * @param {LayoutFindUniqueArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayoutFindUniqueArgs>(args: SelectSubset<T, LayoutFindUniqueArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Layout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayoutFindUniqueOrThrowArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayoutFindUniqueOrThrowArgs>(args: SelectSubset<T, LayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutFindFirstArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayoutFindFirstArgs>(args?: SelectSubset<T, LayoutFindFirstArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutFindFirstOrThrowArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayoutFindFirstOrThrowArgs>(args?: SelectSubset<T, LayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Layouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Layouts
     * const layouts = await prisma.layout.findMany()
     * 
     * // Get first 10 Layouts
     * const layouts = await prisma.layout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layoutWithIdOnly = await prisma.layout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayoutFindManyArgs>(args?: SelectSubset<T, LayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Layout.
     * @param {LayoutCreateArgs} args - Arguments to create a Layout.
     * @example
     * // Create one Layout
     * const Layout = await prisma.layout.create({
     *   data: {
     *     // ... data to create a Layout
     *   }
     * })
     * 
     */
    create<T extends LayoutCreateArgs>(args: SelectSubset<T, LayoutCreateArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Layouts.
     * @param {LayoutCreateManyArgs} args - Arguments to create many Layouts.
     * @example
     * // Create many Layouts
     * const layout = await prisma.layout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayoutCreateManyArgs>(args?: SelectSubset<T, LayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Layout.
     * @param {LayoutDeleteArgs} args - Arguments to delete one Layout.
     * @example
     * // Delete one Layout
     * const Layout = await prisma.layout.delete({
     *   where: {
     *     // ... filter to delete one Layout
     *   }
     * })
     * 
     */
    delete<T extends LayoutDeleteArgs>(args: SelectSubset<T, LayoutDeleteArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Layout.
     * @param {LayoutUpdateArgs} args - Arguments to update one Layout.
     * @example
     * // Update one Layout
     * const layout = await prisma.layout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayoutUpdateArgs>(args: SelectSubset<T, LayoutUpdateArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Layouts.
     * @param {LayoutDeleteManyArgs} args - Arguments to filter Layouts to delete.
     * @example
     * // Delete a few Layouts
     * const { count } = await prisma.layout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayoutDeleteManyArgs>(args?: SelectSubset<T, LayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Layouts
     * const layout = await prisma.layout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayoutUpdateManyArgs>(args: SelectSubset<T, LayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Layout.
     * @param {LayoutUpsertArgs} args - Arguments to update or create a Layout.
     * @example
     * // Update or create a Layout
     * const layout = await prisma.layout.upsert({
     *   create: {
     *     // ... data to create a Layout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Layout we want to update
     *   }
     * })
     */
    upsert<T extends LayoutUpsertArgs>(args: SelectSubset<T, LayoutUpsertArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Layouts that matches the filter.
     * @param {LayoutFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const layout = await prisma.layout.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LayoutFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Layout.
     * @param {LayoutAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const layout = await prisma.layout.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LayoutAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutCountArgs} args - Arguments to filter Layouts to count.
     * @example
     * // Count the number of Layouts
     * const count = await prisma.layout.count({
     *   where: {
     *     // ... the filter for the Layouts we want to count
     *   }
     * })
    **/
    count<T extends LayoutCountArgs>(
      args?: Subset<T, LayoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Layout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LayoutAggregateArgs>(args: Subset<T, LayoutAggregateArgs>): Prisma.PrismaPromise<GetLayoutAggregateType<T>>

    /**
     * Group by Layout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LayoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayoutGroupByArgs['orderBy'] }
        : { orderBy?: LayoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Layout model
   */
  readonly fields: LayoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Layout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elements<T extends Layout$elementsArgs<ExtArgs> = {}>(args?: Subset<T, Layout$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Layout model
   */
  interface LayoutFieldRefs {
    readonly id: FieldRef<"Layout", 'String'>
    readonly name: FieldRef<"Layout", 'String'>
    readonly previewimage: FieldRef<"Layout", 'String'>
    readonly createdAt: FieldRef<"Layout", 'DateTime'>
    readonly updatedAt: FieldRef<"Layout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Layout findUnique
   */
  export type LayoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout findUniqueOrThrow
   */
  export type LayoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout findFirst
   */
  export type LayoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layouts.
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layouts.
     */
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Layout findFirstOrThrow
   */
  export type LayoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layouts.
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layouts.
     */
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Layout findMany
   */
  export type LayoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layouts to fetch.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Layouts.
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Layout create
   */
  export type LayoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Layout.
     */
    data: XOR<LayoutCreateInput, LayoutUncheckedCreateInput>
  }

  /**
   * Layout createMany
   */
  export type LayoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Layouts.
     */
    data: LayoutCreateManyInput | LayoutCreateManyInput[]
  }

  /**
   * Layout update
   */
  export type LayoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Layout.
     */
    data: XOR<LayoutUpdateInput, LayoutUncheckedUpdateInput>
    /**
     * Choose, which Layout to update.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout updateMany
   */
  export type LayoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Layouts.
     */
    data: XOR<LayoutUpdateManyMutationInput, LayoutUncheckedUpdateManyInput>
    /**
     * Filter which Layouts to update
     */
    where?: LayoutWhereInput
    /**
     * Limit how many Layouts to update.
     */
    limit?: number
  }

  /**
   * Layout upsert
   */
  export type LayoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Layout to update in case it exists.
     */
    where: LayoutWhereUniqueInput
    /**
     * In case the Layout found by the `where` argument doesn't exist, create a new Layout with this data.
     */
    create: XOR<LayoutCreateInput, LayoutUncheckedCreateInput>
    /**
     * In case the Layout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayoutUpdateInput, LayoutUncheckedUpdateInput>
  }

  /**
   * Layout delete
   */
  export type LayoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter which Layout to delete.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout deleteMany
   */
  export type LayoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layouts to delete
     */
    where?: LayoutWhereInput
    /**
     * Limit how many Layouts to delete.
     */
    limit?: number
  }

  /**
   * Layout findRaw
   */
  export type LayoutFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Layout aggregateRaw
   */
  export type LayoutAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Layout.elements
   */
  export type Layout$elementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutElement
     */
    select?: LayoutElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutElement
     */
    omit?: LayoutElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutElementInclude<ExtArgs> | null
    where?: LayoutElementWhereInput
    orderBy?: LayoutElementOrderByWithRelationInput | LayoutElementOrderByWithRelationInput[]
    cursor?: LayoutElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayoutElementScalarFieldEnum | LayoutElementScalarFieldEnum[]
  }

  /**
   * Layout without action
   */
  export type LayoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
  }


  /**
   * Model AssetCategory
   */

  export type AggregateAssetCategory = {
    _count: AssetCategoryCountAggregateOutputType | null
    _min: AssetCategoryMinAggregateOutputType | null
    _max: AssetCategoryMaxAggregateOutputType | null
  }

  export type AssetCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssetCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssetCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetCategory to aggregate.
     */
    where?: AssetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetCategories to fetch.
     */
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetCategories
    **/
    _count?: true | AssetCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetCategoryMaxAggregateInputType
  }

  export type GetAssetCategoryAggregateType<T extends AssetCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetCategory[P]>
      : GetScalarType<T[P], AggregateAssetCategory[P]>
  }




  export type AssetCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetCategoryWhereInput
    orderBy?: AssetCategoryOrderByWithAggregationInput | AssetCategoryOrderByWithAggregationInput[]
    by: AssetCategoryScalarFieldEnum[] | AssetCategoryScalarFieldEnum
    having?: AssetCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCategoryCountAggregateInputType | true
    _min?: AssetCategoryMinAggregateInputType
    _max?: AssetCategoryMaxAggregateInputType
  }

  export type AssetCategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AssetCategoryCountAggregateOutputType | null
    _min: AssetCategoryMinAggregateOutputType | null
    _max: AssetCategoryMaxAggregateOutputType | null
  }

  type GetAssetCategoryGroupByPayload<T extends AssetCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], AssetCategoryGroupByOutputType[P]>
        }
      >
    >


  export type AssetCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assets?: boolean | AssetCategory$assetsArgs<ExtArgs>
    _count?: boolean | AssetCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetCategory"]>



  export type AssetCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssetCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["assetCategory"]>
  export type AssetCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | AssetCategory$assetsArgs<ExtArgs>
    _count?: boolean | AssetCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AssetCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetCategory"
    objects: {
      assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assetCategory"]>
    composites: {}
  }

  type AssetCategoryGetPayload<S extends boolean | null | undefined | AssetCategoryDefaultArgs> = $Result.GetResult<Prisma.$AssetCategoryPayload, S>

  type AssetCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCategoryCountAggregateInputType | true
    }

  export interface AssetCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetCategory'], meta: { name: 'AssetCategory' } }
    /**
     * Find zero or one AssetCategory that matches the filter.
     * @param {AssetCategoryFindUniqueArgs} args - Arguments to find a AssetCategory
     * @example
     * // Get one AssetCategory
     * const assetCategory = await prisma.assetCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetCategoryFindUniqueArgs>(args: SelectSubset<T, AssetCategoryFindUniqueArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssetCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetCategoryFindUniqueOrThrowArgs} args - Arguments to find a AssetCategory
     * @example
     * // Get one AssetCategory
     * const assetCategory = await prisma.assetCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryFindFirstArgs} args - Arguments to find a AssetCategory
     * @example
     * // Get one AssetCategory
     * const assetCategory = await prisma.assetCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetCategoryFindFirstArgs>(args?: SelectSubset<T, AssetCategoryFindFirstArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryFindFirstOrThrowArgs} args - Arguments to find a AssetCategory
     * @example
     * // Get one AssetCategory
     * const assetCategory = await prisma.assetCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssetCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetCategories
     * const assetCategories = await prisma.assetCategory.findMany()
     * 
     * // Get first 10 AssetCategories
     * const assetCategories = await prisma.assetCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetCategoryWithIdOnly = await prisma.assetCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetCategoryFindManyArgs>(args?: SelectSubset<T, AssetCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssetCategory.
     * @param {AssetCategoryCreateArgs} args - Arguments to create a AssetCategory.
     * @example
     * // Create one AssetCategory
     * const AssetCategory = await prisma.assetCategory.create({
     *   data: {
     *     // ... data to create a AssetCategory
     *   }
     * })
     * 
     */
    create<T extends AssetCategoryCreateArgs>(args: SelectSubset<T, AssetCategoryCreateArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssetCategories.
     * @param {AssetCategoryCreateManyArgs} args - Arguments to create many AssetCategories.
     * @example
     * // Create many AssetCategories
     * const assetCategory = await prisma.assetCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCategoryCreateManyArgs>(args?: SelectSubset<T, AssetCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssetCategory.
     * @param {AssetCategoryDeleteArgs} args - Arguments to delete one AssetCategory.
     * @example
     * // Delete one AssetCategory
     * const AssetCategory = await prisma.assetCategory.delete({
     *   where: {
     *     // ... filter to delete one AssetCategory
     *   }
     * })
     * 
     */
    delete<T extends AssetCategoryDeleteArgs>(args: SelectSubset<T, AssetCategoryDeleteArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssetCategory.
     * @param {AssetCategoryUpdateArgs} args - Arguments to update one AssetCategory.
     * @example
     * // Update one AssetCategory
     * const assetCategory = await prisma.assetCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetCategoryUpdateArgs>(args: SelectSubset<T, AssetCategoryUpdateArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssetCategories.
     * @param {AssetCategoryDeleteManyArgs} args - Arguments to filter AssetCategories to delete.
     * @example
     * // Delete a few AssetCategories
     * const { count } = await prisma.assetCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetCategoryDeleteManyArgs>(args?: SelectSubset<T, AssetCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetCategories
     * const assetCategory = await prisma.assetCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetCategoryUpdateManyArgs>(args: SelectSubset<T, AssetCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssetCategory.
     * @param {AssetCategoryUpsertArgs} args - Arguments to update or create a AssetCategory.
     * @example
     * // Update or create a AssetCategory
     * const assetCategory = await prisma.assetCategory.upsert({
     *   create: {
     *     // ... data to create a AssetCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetCategory we want to update
     *   }
     * })
     */
    upsert<T extends AssetCategoryUpsertArgs>(args: SelectSubset<T, AssetCategoryUpsertArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssetCategories that matches the filter.
     * @param {AssetCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const assetCategory = await prisma.assetCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AssetCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AssetCategory.
     * @param {AssetCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const assetCategory = await prisma.assetCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AssetCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AssetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryCountArgs} args - Arguments to filter AssetCategories to count.
     * @example
     * // Count the number of AssetCategories
     * const count = await prisma.assetCategory.count({
     *   where: {
     *     // ... the filter for the AssetCategories we want to count
     *   }
     * })
    **/
    count<T extends AssetCategoryCountArgs>(
      args?: Subset<T, AssetCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetCategoryAggregateArgs>(args: Subset<T, AssetCategoryAggregateArgs>): Prisma.PrismaPromise<GetAssetCategoryAggregateType<T>>

    /**
     * Group by AssetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetCategoryGroupByArgs['orderBy'] }
        : { orderBy?: AssetCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetCategory model
   */
  readonly fields: AssetCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assets<T extends AssetCategory$assetsArgs<ExtArgs> = {}>(args?: Subset<T, AssetCategory$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssetCategory model
   */
  interface AssetCategoryFieldRefs {
    readonly id: FieldRef<"AssetCategory", 'String'>
    readonly name: FieldRef<"AssetCategory", 'String'>
    readonly createdAt: FieldRef<"AssetCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"AssetCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssetCategory findUnique
   */
  export type AssetCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategory to fetch.
     */
    where: AssetCategoryWhereUniqueInput
  }

  /**
   * AssetCategory findUniqueOrThrow
   */
  export type AssetCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategory to fetch.
     */
    where: AssetCategoryWhereUniqueInput
  }

  /**
   * AssetCategory findFirst
   */
  export type AssetCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategory to fetch.
     */
    where?: AssetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetCategories to fetch.
     */
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetCategories.
     */
    cursor?: AssetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetCategories.
     */
    distinct?: AssetCategoryScalarFieldEnum | AssetCategoryScalarFieldEnum[]
  }

  /**
   * AssetCategory findFirstOrThrow
   */
  export type AssetCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategory to fetch.
     */
    where?: AssetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetCategories to fetch.
     */
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetCategories.
     */
    cursor?: AssetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetCategories.
     */
    distinct?: AssetCategoryScalarFieldEnum | AssetCategoryScalarFieldEnum[]
  }

  /**
   * AssetCategory findMany
   */
  export type AssetCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AssetCategories to fetch.
     */
    where?: AssetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetCategories to fetch.
     */
    orderBy?: AssetCategoryOrderByWithRelationInput | AssetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetCategories.
     */
    cursor?: AssetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetCategories.
     */
    skip?: number
    distinct?: AssetCategoryScalarFieldEnum | AssetCategoryScalarFieldEnum[]
  }

  /**
   * AssetCategory create
   */
  export type AssetCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetCategory.
     */
    data: XOR<AssetCategoryCreateInput, AssetCategoryUncheckedCreateInput>
  }

  /**
   * AssetCategory createMany
   */
  export type AssetCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetCategories.
     */
    data: AssetCategoryCreateManyInput | AssetCategoryCreateManyInput[]
  }

  /**
   * AssetCategory update
   */
  export type AssetCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetCategory.
     */
    data: XOR<AssetCategoryUpdateInput, AssetCategoryUncheckedUpdateInput>
    /**
     * Choose, which AssetCategory to update.
     */
    where: AssetCategoryWhereUniqueInput
  }

  /**
   * AssetCategory updateMany
   */
  export type AssetCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetCategories.
     */
    data: XOR<AssetCategoryUpdateManyMutationInput, AssetCategoryUncheckedUpdateManyInput>
    /**
     * Filter which AssetCategories to update
     */
    where?: AssetCategoryWhereInput
    /**
     * Limit how many AssetCategories to update.
     */
    limit?: number
  }

  /**
   * AssetCategory upsert
   */
  export type AssetCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetCategory to update in case it exists.
     */
    where: AssetCategoryWhereUniqueInput
    /**
     * In case the AssetCategory found by the `where` argument doesn't exist, create a new AssetCategory with this data.
     */
    create: XOR<AssetCategoryCreateInput, AssetCategoryUncheckedCreateInput>
    /**
     * In case the AssetCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetCategoryUpdateInput, AssetCategoryUncheckedUpdateInput>
  }

  /**
   * AssetCategory delete
   */
  export type AssetCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
    /**
     * Filter which AssetCategory to delete.
     */
    where: AssetCategoryWhereUniqueInput
  }

  /**
   * AssetCategory deleteMany
   */
  export type AssetCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetCategories to delete
     */
    where?: AssetCategoryWhereInput
    /**
     * Limit how many AssetCategories to delete.
     */
    limit?: number
  }

  /**
   * AssetCategory findRaw
   */
  export type AssetCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AssetCategory aggregateRaw
   */
  export type AssetCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AssetCategory.assets
   */
  export type AssetCategory$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * AssetCategory without action
   */
  export type AssetCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCategory
     */
    select?: AssetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetCategory
     */
    omit?: AssetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    name: string | null
    imgUrl: string | null
    imgKey: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imgUrl: string | null
    imgKey: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    name: number
    imgUrl: number
    imgKey: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssetMinAggregateInputType = {
    id?: true
    name?: true
    imgUrl?: true
    imgKey?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    name?: true
    imgUrl?: true
    imgKey?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    name?: true
    imgUrl?: true
    imgKey?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    name: string
    imgUrl: string
    imgKey: string
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imgUrl?: boolean
    imgKey?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | AssetCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>



  export type AssetSelectScalar = {
    id?: boolean
    name?: boolean
    imgUrl?: boolean
    imgKey?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imgUrl" | "imgKey" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | AssetCategoryDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      category: Prisma.$AssetCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      imgUrl: string
      imgKey: string
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * @param {AssetFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const asset = await prisma.asset.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AssetFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Asset.
     * @param {AssetAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const asset = await prisma.asset.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AssetAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends AssetCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetCategoryDefaultArgs<ExtArgs>>): Prisma__AssetCategoryClient<$Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly imgUrl: FieldRef<"Asset", 'String'>
    readonly imgKey: FieldRef<"Asset", 'String'>
    readonly categoryId: FieldRef<"Asset", 'String'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset findRaw
   */
  export type AssetFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Asset aggregateRaw
   */
  export type AssetAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const BackgroundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    imgKey: 'imgKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    recommendedColors: 'recommendedColors'
  };

  export type BackgroundScalarFieldEnum = (typeof BackgroundScalarFieldEnum)[keyof typeof BackgroundScalarFieldEnum]


  export const LayoutElementScalarFieldEnum: {
    id: 'id',
    layoutId: 'layoutId',
    type: 'type',
    label: 'label',
    positionX: 'positionX',
    positionY: 'positionY',
    width: 'width',
    height: 'height',
    zIndex: 'zIndex',
    defaultText: 'defaultText',
    fontSize: 'fontSize',
    color: 'color',
    fontFamily: 'fontFamily',
    fontWeight: 'fontWeight',
    imageUrl: 'imageUrl'
  };

  export type LayoutElementScalarFieldEnum = (typeof LayoutElementScalarFieldEnum)[keyof typeof LayoutElementScalarFieldEnum]


  export const LayoutScalarFieldEnum: {
    id: 'id',
    name: 'name',
    previewimage: 'previewimage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LayoutScalarFieldEnum = (typeof LayoutScalarFieldEnum)[keyof typeof LayoutScalarFieldEnum]


  export const AssetCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssetCategoryScalarFieldEnum = (typeof AssetCategoryScalarFieldEnum)[keyof typeof AssetCategoryScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imgUrl: 'imgUrl',
    imgKey: 'imgKey',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'LayoutElementType'
   */
  export type EnumLayoutElementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LayoutElementType'>
    


  /**
   * Reference to a field of type 'LayoutElementType[]'
   */
  export type ListEnumLayoutElementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LayoutElementType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BackgroundWhereInput = {
    AND?: BackgroundWhereInput | BackgroundWhereInput[]
    OR?: BackgroundWhereInput[]
    NOT?: BackgroundWhereInput | BackgroundWhereInput[]
    id?: StringFilter<"Background"> | string
    name?: StringFilter<"Background"> | string
    imageUrl?: StringFilter<"Background"> | string
    imgKey?: StringFilter<"Background"> | string
    createdAt?: DateTimeFilter<"Background"> | Date | string
    updatedAt?: DateTimeFilter<"Background"> | Date | string
    recommendedColors?: JsonFilter<"Background">
  }

  export type BackgroundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    imgKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recommendedColors?: SortOrder
  }

  export type BackgroundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BackgroundWhereInput | BackgroundWhereInput[]
    OR?: BackgroundWhereInput[]
    NOT?: BackgroundWhereInput | BackgroundWhereInput[]
    imageUrl?: StringFilter<"Background"> | string
    imgKey?: StringFilter<"Background"> | string
    createdAt?: DateTimeFilter<"Background"> | Date | string
    updatedAt?: DateTimeFilter<"Background"> | Date | string
    recommendedColors?: JsonFilter<"Background">
  }, "id" | "name">

  export type BackgroundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    imgKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recommendedColors?: SortOrder
    _count?: BackgroundCountOrderByAggregateInput
    _max?: BackgroundMaxOrderByAggregateInput
    _min?: BackgroundMinOrderByAggregateInput
  }

  export type BackgroundScalarWhereWithAggregatesInput = {
    AND?: BackgroundScalarWhereWithAggregatesInput | BackgroundScalarWhereWithAggregatesInput[]
    OR?: BackgroundScalarWhereWithAggregatesInput[]
    NOT?: BackgroundScalarWhereWithAggregatesInput | BackgroundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Background"> | string
    name?: StringWithAggregatesFilter<"Background"> | string
    imageUrl?: StringWithAggregatesFilter<"Background"> | string
    imgKey?: StringWithAggregatesFilter<"Background"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Background"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Background"> | Date | string
    recommendedColors?: JsonWithAggregatesFilter<"Background">
  }

  export type LayoutElementWhereInput = {
    AND?: LayoutElementWhereInput | LayoutElementWhereInput[]
    OR?: LayoutElementWhereInput[]
    NOT?: LayoutElementWhereInput | LayoutElementWhereInput[]
    id?: StringFilter<"LayoutElement"> | string
    layoutId?: StringFilter<"LayoutElement"> | string
    type?: EnumLayoutElementTypeFilter<"LayoutElement"> | $Enums.LayoutElementType
    label?: StringFilter<"LayoutElement"> | string
    positionX?: IntFilter<"LayoutElement"> | number
    positionY?: IntFilter<"LayoutElement"> | number
    width?: IntNullableFilter<"LayoutElement"> | number | null
    height?: IntNullableFilter<"LayoutElement"> | number | null
    zIndex?: IntNullableFilter<"LayoutElement"> | number | null
    defaultText?: StringNullableFilter<"LayoutElement"> | string | null
    fontSize?: IntNullableFilter<"LayoutElement"> | number | null
    color?: StringNullableFilter<"LayoutElement"> | string | null
    fontFamily?: StringNullableFilter<"LayoutElement"> | string | null
    fontWeight?: StringNullableFilter<"LayoutElement"> | string | null
    imageUrl?: StringNullableFilter<"LayoutElement"> | string | null
    layout?: XOR<LayoutScalarRelationFilter, LayoutWhereInput>
  }

  export type LayoutElementOrderByWithRelationInput = {
    id?: SortOrder
    layoutId?: SortOrder
    type?: SortOrder
    label?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    zIndex?: SortOrder
    defaultText?: SortOrder
    fontSize?: SortOrder
    color?: SortOrder
    fontFamily?: SortOrder
    fontWeight?: SortOrder
    imageUrl?: SortOrder
    layout?: LayoutOrderByWithRelationInput
  }

  export type LayoutElementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LayoutElementWhereInput | LayoutElementWhereInput[]
    OR?: LayoutElementWhereInput[]
    NOT?: LayoutElementWhereInput | LayoutElementWhereInput[]
    layoutId?: StringFilter<"LayoutElement"> | string
    type?: EnumLayoutElementTypeFilter<"LayoutElement"> | $Enums.LayoutElementType
    label?: StringFilter<"LayoutElement"> | string
    positionX?: IntFilter<"LayoutElement"> | number
    positionY?: IntFilter<"LayoutElement"> | number
    width?: IntNullableFilter<"LayoutElement"> | number | null
    height?: IntNullableFilter<"LayoutElement"> | number | null
    zIndex?: IntNullableFilter<"LayoutElement"> | number | null
    defaultText?: StringNullableFilter<"LayoutElement"> | string | null
    fontSize?: IntNullableFilter<"LayoutElement"> | number | null
    color?: StringNullableFilter<"LayoutElement"> | string | null
    fontFamily?: StringNullableFilter<"LayoutElement"> | string | null
    fontWeight?: StringNullableFilter<"LayoutElement"> | string | null
    imageUrl?: StringNullableFilter<"LayoutElement"> | string | null
    layout?: XOR<LayoutScalarRelationFilter, LayoutWhereInput>
  }, "id">

  export type LayoutElementOrderByWithAggregationInput = {
    id?: SortOrder
    layoutId?: SortOrder
    type?: SortOrder
    label?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    zIndex?: SortOrder
    defaultText?: SortOrder
    fontSize?: SortOrder
    color?: SortOrder
    fontFamily?: SortOrder
    fontWeight?: SortOrder
    imageUrl?: SortOrder
    _count?: LayoutElementCountOrderByAggregateInput
    _avg?: LayoutElementAvgOrderByAggregateInput
    _max?: LayoutElementMaxOrderByAggregateInput
    _min?: LayoutElementMinOrderByAggregateInput
    _sum?: LayoutElementSumOrderByAggregateInput
  }

  export type LayoutElementScalarWhereWithAggregatesInput = {
    AND?: LayoutElementScalarWhereWithAggregatesInput | LayoutElementScalarWhereWithAggregatesInput[]
    OR?: LayoutElementScalarWhereWithAggregatesInput[]
    NOT?: LayoutElementScalarWhereWithAggregatesInput | LayoutElementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LayoutElement"> | string
    layoutId?: StringWithAggregatesFilter<"LayoutElement"> | string
    type?: EnumLayoutElementTypeWithAggregatesFilter<"LayoutElement"> | $Enums.LayoutElementType
    label?: StringWithAggregatesFilter<"LayoutElement"> | string
    positionX?: IntWithAggregatesFilter<"LayoutElement"> | number
    positionY?: IntWithAggregatesFilter<"LayoutElement"> | number
    width?: IntNullableWithAggregatesFilter<"LayoutElement"> | number | null
    height?: IntNullableWithAggregatesFilter<"LayoutElement"> | number | null
    zIndex?: IntNullableWithAggregatesFilter<"LayoutElement"> | number | null
    defaultText?: StringNullableWithAggregatesFilter<"LayoutElement"> | string | null
    fontSize?: IntNullableWithAggregatesFilter<"LayoutElement"> | number | null
    color?: StringNullableWithAggregatesFilter<"LayoutElement"> | string | null
    fontFamily?: StringNullableWithAggregatesFilter<"LayoutElement"> | string | null
    fontWeight?: StringNullableWithAggregatesFilter<"LayoutElement"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"LayoutElement"> | string | null
  }

  export type LayoutWhereInput = {
    AND?: LayoutWhereInput | LayoutWhereInput[]
    OR?: LayoutWhereInput[]
    NOT?: LayoutWhereInput | LayoutWhereInput[]
    id?: StringFilter<"Layout"> | string
    name?: StringFilter<"Layout"> | string
    previewimage?: StringFilter<"Layout"> | string
    createdAt?: DateTimeFilter<"Layout"> | Date | string
    updatedAt?: DateTimeFilter<"Layout"> | Date | string
    elements?: LayoutElementListRelationFilter
  }

  export type LayoutOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    previewimage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    elements?: LayoutElementOrderByRelationAggregateInput
  }

  export type LayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LayoutWhereInput | LayoutWhereInput[]
    OR?: LayoutWhereInput[]
    NOT?: LayoutWhereInput | LayoutWhereInput[]
    name?: StringFilter<"Layout"> | string
    previewimage?: StringFilter<"Layout"> | string
    createdAt?: DateTimeFilter<"Layout"> | Date | string
    updatedAt?: DateTimeFilter<"Layout"> | Date | string
    elements?: LayoutElementListRelationFilter
  }, "id">

  export type LayoutOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    previewimage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LayoutCountOrderByAggregateInput
    _max?: LayoutMaxOrderByAggregateInput
    _min?: LayoutMinOrderByAggregateInput
  }

  export type LayoutScalarWhereWithAggregatesInput = {
    AND?: LayoutScalarWhereWithAggregatesInput | LayoutScalarWhereWithAggregatesInput[]
    OR?: LayoutScalarWhereWithAggregatesInput[]
    NOT?: LayoutScalarWhereWithAggregatesInput | LayoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Layout"> | string
    name?: StringWithAggregatesFilter<"Layout"> | string
    previewimage?: StringWithAggregatesFilter<"Layout"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Layout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Layout"> | Date | string
  }

  export type AssetCategoryWhereInput = {
    AND?: AssetCategoryWhereInput | AssetCategoryWhereInput[]
    OR?: AssetCategoryWhereInput[]
    NOT?: AssetCategoryWhereInput | AssetCategoryWhereInput[]
    id?: StringFilter<"AssetCategory"> | string
    name?: StringFilter<"AssetCategory"> | string
    createdAt?: DateTimeFilter<"AssetCategory"> | Date | string
    updatedAt?: DateTimeFilter<"AssetCategory"> | Date | string
    assets?: AssetListRelationFilter
  }

  export type AssetCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assets?: AssetOrderByRelationAggregateInput
  }

  export type AssetCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AssetCategoryWhereInput | AssetCategoryWhereInput[]
    OR?: AssetCategoryWhereInput[]
    NOT?: AssetCategoryWhereInput | AssetCategoryWhereInput[]
    createdAt?: DateTimeFilter<"AssetCategory"> | Date | string
    updatedAt?: DateTimeFilter<"AssetCategory"> | Date | string
    assets?: AssetListRelationFilter
  }, "id" | "name">

  export type AssetCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssetCategoryCountOrderByAggregateInput
    _max?: AssetCategoryMaxOrderByAggregateInput
    _min?: AssetCategoryMinOrderByAggregateInput
  }

  export type AssetCategoryScalarWhereWithAggregatesInput = {
    AND?: AssetCategoryScalarWhereWithAggregatesInput | AssetCategoryScalarWhereWithAggregatesInput[]
    OR?: AssetCategoryScalarWhereWithAggregatesInput[]
    NOT?: AssetCategoryScalarWhereWithAggregatesInput | AssetCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssetCategory"> | string
    name?: StringWithAggregatesFilter<"AssetCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AssetCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssetCategory"> | Date | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    imgUrl?: StringFilter<"Asset"> | string
    imgKey?: StringFilter<"Asset"> | string
    categoryId?: StringFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    category?: XOR<AssetCategoryScalarRelationFilter, AssetCategoryWhereInput>
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
    imgKey?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: AssetCategoryOrderByWithRelationInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    imgUrl?: StringFilter<"Asset"> | string
    imgKey?: StringFilter<"Asset"> | string
    categoryId?: StringFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    category?: XOR<AssetCategoryScalarRelationFilter, AssetCategoryWhereInput>
  }, "id" | "name">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
    imgKey?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    name?: StringWithAggregatesFilter<"Asset"> | string
    imgUrl?: StringWithAggregatesFilter<"Asset"> | string
    imgKey?: StringWithAggregatesFilter<"Asset"> | string
    categoryId?: StringWithAggregatesFilter<"Asset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type BackgroundCreateInput = {
    id?: string
    name: string
    imageUrl: string
    imgKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendedColors: InputJsonValue
  }

  export type BackgroundUncheckedCreateInput = {
    id?: string
    name: string
    imageUrl: string
    imgKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendedColors: InputJsonValue
  }

  export type BackgroundUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedColors?: InputJsonValue | InputJsonValue
  }

  export type BackgroundUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedColors?: InputJsonValue | InputJsonValue
  }

  export type BackgroundCreateManyInput = {
    id?: string
    name: string
    imageUrl: string
    imgKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendedColors: InputJsonValue
  }

  export type BackgroundUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedColors?: InputJsonValue | InputJsonValue
  }

  export type BackgroundUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedColors?: InputJsonValue | InputJsonValue
  }

  export type LayoutElementCreateInput = {
    id?: string
    type: $Enums.LayoutElementType
    label: string
    positionX: number
    positionY: number
    width?: number | null
    height?: number | null
    zIndex?: number | null
    defaultText?: string | null
    fontSize?: number | null
    color?: string | null
    fontFamily?: string | null
    fontWeight?: string | null
    imageUrl?: string | null
    layout: LayoutCreateNestedOneWithoutElementsInput
  }

  export type LayoutElementUncheckedCreateInput = {
    id?: string
    layoutId: string
    type: $Enums.LayoutElementType
    label: string
    positionX: number
    positionY: number
    width?: number | null
    height?: number | null
    zIndex?: number | null
    defaultText?: string | null
    fontSize?: number | null
    color?: string | null
    fontFamily?: string | null
    fontWeight?: string | null
    imageUrl?: string | null
  }

  export type LayoutElementUpdateInput = {
    type?: EnumLayoutElementTypeFieldUpdateOperationsInput | $Enums.LayoutElementType
    label?: StringFieldUpdateOperationsInput | string
    positionX?: IntFieldUpdateOperationsInput | number
    positionY?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    defaultText?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: LayoutUpdateOneRequiredWithoutElementsNestedInput
  }

  export type LayoutElementUncheckedUpdateInput = {
    layoutId?: StringFieldUpdateOperationsInput | string
    type?: EnumLayoutElementTypeFieldUpdateOperationsInput | $Enums.LayoutElementType
    label?: StringFieldUpdateOperationsInput | string
    positionX?: IntFieldUpdateOperationsInput | number
    positionY?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    defaultText?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayoutElementCreateManyInput = {
    id?: string
    layoutId: string
    type: $Enums.LayoutElementType
    label: string
    positionX: number
    positionY: number
    width?: number | null
    height?: number | null
    zIndex?: number | null
    defaultText?: string | null
    fontSize?: number | null
    color?: string | null
    fontFamily?: string | null
    fontWeight?: string | null
    imageUrl?: string | null
  }

  export type LayoutElementUpdateManyMutationInput = {
    type?: EnumLayoutElementTypeFieldUpdateOperationsInput | $Enums.LayoutElementType
    label?: StringFieldUpdateOperationsInput | string
    positionX?: IntFieldUpdateOperationsInput | number
    positionY?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    defaultText?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayoutElementUncheckedUpdateManyInput = {
    layoutId?: StringFieldUpdateOperationsInput | string
    type?: EnumLayoutElementTypeFieldUpdateOperationsInput | $Enums.LayoutElementType
    label?: StringFieldUpdateOperationsInput | string
    positionX?: IntFieldUpdateOperationsInput | number
    positionY?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    defaultText?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayoutCreateInput = {
    id?: string
    name: string
    previewimage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: LayoutElementCreateNestedManyWithoutLayoutInput
  }

  export type LayoutUncheckedCreateInput = {
    id?: string
    name: string
    previewimage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    elements?: LayoutElementUncheckedCreateNestedManyWithoutLayoutInput
  }

  export type LayoutUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    previewimage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: LayoutElementUpdateManyWithoutLayoutNestedInput
  }

  export type LayoutUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    previewimage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elements?: LayoutElementUncheckedUpdateManyWithoutLayoutNestedInput
  }

  export type LayoutCreateManyInput = {
    id?: string
    name: string
    previewimage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayoutUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    previewimage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    previewimage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetCreateNestedManyWithoutCategoryInput
  }

  export type AssetCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type AssetCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUpdateManyWithoutCategoryNestedInput
  }

  export type AssetCategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type AssetCategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateInput = {
    id?: string
    name: string
    imgUrl: string
    imgKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: AssetCategoryCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    name: string
    imgUrl: string
    imgKey: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: AssetCategoryUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateManyInput = {
    id?: string
    name: string
    imgUrl: string
    imgKey: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type BackgroundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    imgKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recommendedColors?: SortOrder
  }

  export type BackgroundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    imgKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BackgroundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    imgKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumLayoutElementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutElementType | EnumLayoutElementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LayoutElementType[] | ListEnumLayoutElementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LayoutElementType[] | ListEnumLayoutElementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLayoutElementTypeFilter<$PrismaModel> | $Enums.LayoutElementType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type LayoutScalarRelationFilter = {
    is?: LayoutWhereInput
    isNot?: LayoutWhereInput
  }

  export type LayoutElementCountOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    type?: SortOrder
    label?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    zIndex?: SortOrder
    defaultText?: SortOrder
    fontSize?: SortOrder
    color?: SortOrder
    fontFamily?: SortOrder
    fontWeight?: SortOrder
    imageUrl?: SortOrder
  }

  export type LayoutElementAvgOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    zIndex?: SortOrder
    fontSize?: SortOrder
  }

  export type LayoutElementMaxOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    type?: SortOrder
    label?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    zIndex?: SortOrder
    defaultText?: SortOrder
    fontSize?: SortOrder
    color?: SortOrder
    fontFamily?: SortOrder
    fontWeight?: SortOrder
    imageUrl?: SortOrder
  }

  export type LayoutElementMinOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    type?: SortOrder
    label?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    zIndex?: SortOrder
    defaultText?: SortOrder
    fontSize?: SortOrder
    color?: SortOrder
    fontFamily?: SortOrder
    fontWeight?: SortOrder
    imageUrl?: SortOrder
  }

  export type LayoutElementSumOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    zIndex?: SortOrder
    fontSize?: SortOrder
  }

  export type EnumLayoutElementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutElementType | EnumLayoutElementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LayoutElementType[] | ListEnumLayoutElementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LayoutElementType[] | ListEnumLayoutElementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLayoutElementTypeWithAggregatesFilter<$PrismaModel> | $Enums.LayoutElementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLayoutElementTypeFilter<$PrismaModel>
    _max?: NestedEnumLayoutElementTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type LayoutElementListRelationFilter = {
    every?: LayoutElementWhereInput
    some?: LayoutElementWhereInput
    none?: LayoutElementWhereInput
  }

  export type LayoutElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LayoutCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    previewimage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayoutMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    previewimage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayoutMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    previewimage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetCategoryScalarRelationFilter = {
    is?: AssetCategoryWhereInput
    isNot?: AssetCategoryWhereInput
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
    imgKey?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
    imgKey?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
    imgKey?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LayoutCreateNestedOneWithoutElementsInput = {
    create?: XOR<LayoutCreateWithoutElementsInput, LayoutUncheckedCreateWithoutElementsInput>
    connectOrCreate?: LayoutCreateOrConnectWithoutElementsInput
    connect?: LayoutWhereUniqueInput
  }

  export type EnumLayoutElementTypeFieldUpdateOperationsInput = {
    set?: $Enums.LayoutElementType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type LayoutUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<LayoutCreateWithoutElementsInput, LayoutUncheckedCreateWithoutElementsInput>
    connectOrCreate?: LayoutCreateOrConnectWithoutElementsInput
    upsert?: LayoutUpsertWithoutElementsInput
    connect?: LayoutWhereUniqueInput
    update?: XOR<XOR<LayoutUpdateToOneWithWhereWithoutElementsInput, LayoutUpdateWithoutElementsInput>, LayoutUncheckedUpdateWithoutElementsInput>
  }

  export type LayoutElementCreateNestedManyWithoutLayoutInput = {
    create?: XOR<LayoutElementCreateWithoutLayoutInput, LayoutElementUncheckedCreateWithoutLayoutInput> | LayoutElementCreateWithoutLayoutInput[] | LayoutElementUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: LayoutElementCreateOrConnectWithoutLayoutInput | LayoutElementCreateOrConnectWithoutLayoutInput[]
    createMany?: LayoutElementCreateManyLayoutInputEnvelope
    connect?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
  }

  export type LayoutElementUncheckedCreateNestedManyWithoutLayoutInput = {
    create?: XOR<LayoutElementCreateWithoutLayoutInput, LayoutElementUncheckedCreateWithoutLayoutInput> | LayoutElementCreateWithoutLayoutInput[] | LayoutElementUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: LayoutElementCreateOrConnectWithoutLayoutInput | LayoutElementCreateOrConnectWithoutLayoutInput[]
    createMany?: LayoutElementCreateManyLayoutInputEnvelope
    connect?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
  }

  export type LayoutElementUpdateManyWithoutLayoutNestedInput = {
    create?: XOR<LayoutElementCreateWithoutLayoutInput, LayoutElementUncheckedCreateWithoutLayoutInput> | LayoutElementCreateWithoutLayoutInput[] | LayoutElementUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: LayoutElementCreateOrConnectWithoutLayoutInput | LayoutElementCreateOrConnectWithoutLayoutInput[]
    upsert?: LayoutElementUpsertWithWhereUniqueWithoutLayoutInput | LayoutElementUpsertWithWhereUniqueWithoutLayoutInput[]
    createMany?: LayoutElementCreateManyLayoutInputEnvelope
    set?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
    disconnect?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
    delete?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
    connect?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
    update?: LayoutElementUpdateWithWhereUniqueWithoutLayoutInput | LayoutElementUpdateWithWhereUniqueWithoutLayoutInput[]
    updateMany?: LayoutElementUpdateManyWithWhereWithoutLayoutInput | LayoutElementUpdateManyWithWhereWithoutLayoutInput[]
    deleteMany?: LayoutElementScalarWhereInput | LayoutElementScalarWhereInput[]
  }

  export type LayoutElementUncheckedUpdateManyWithoutLayoutNestedInput = {
    create?: XOR<LayoutElementCreateWithoutLayoutInput, LayoutElementUncheckedCreateWithoutLayoutInput> | LayoutElementCreateWithoutLayoutInput[] | LayoutElementUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: LayoutElementCreateOrConnectWithoutLayoutInput | LayoutElementCreateOrConnectWithoutLayoutInput[]
    upsert?: LayoutElementUpsertWithWhereUniqueWithoutLayoutInput | LayoutElementUpsertWithWhereUniqueWithoutLayoutInput[]
    createMany?: LayoutElementCreateManyLayoutInputEnvelope
    set?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
    disconnect?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
    delete?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
    connect?: LayoutElementWhereUniqueInput | LayoutElementWhereUniqueInput[]
    update?: LayoutElementUpdateWithWhereUniqueWithoutLayoutInput | LayoutElementUpdateWithWhereUniqueWithoutLayoutInput[]
    updateMany?: LayoutElementUpdateManyWithWhereWithoutLayoutInput | LayoutElementUpdateManyWithWhereWithoutLayoutInput[]
    deleteMany?: LayoutElementScalarWhereInput | LayoutElementScalarWhereInput[]
  }

  export type AssetCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AssetCreateWithoutCategoryInput, AssetUncheckedCreateWithoutCategoryInput> | AssetCreateWithoutCategoryInput[] | AssetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutCategoryInput | AssetCreateOrConnectWithoutCategoryInput[]
    createMany?: AssetCreateManyCategoryInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AssetCreateWithoutCategoryInput, AssetUncheckedCreateWithoutCategoryInput> | AssetCreateWithoutCategoryInput[] | AssetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutCategoryInput | AssetCreateOrConnectWithoutCategoryInput[]
    createMany?: AssetCreateManyCategoryInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AssetCreateWithoutCategoryInput, AssetUncheckedCreateWithoutCategoryInput> | AssetCreateWithoutCategoryInput[] | AssetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutCategoryInput | AssetCreateOrConnectWithoutCategoryInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutCategoryInput | AssetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AssetCreateManyCategoryInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutCategoryInput | AssetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutCategoryInput | AssetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AssetCreateWithoutCategoryInput, AssetUncheckedCreateWithoutCategoryInput> | AssetCreateWithoutCategoryInput[] | AssetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutCategoryInput | AssetCreateOrConnectWithoutCategoryInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutCategoryInput | AssetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AssetCreateManyCategoryInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutCategoryInput | AssetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutCategoryInput | AssetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type AssetCategoryCreateNestedOneWithoutAssetsInput = {
    create?: XOR<AssetCategoryCreateWithoutAssetsInput, AssetCategoryUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutAssetsInput
    connect?: AssetCategoryWhereUniqueInput
  }

  export type AssetCategoryUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<AssetCategoryCreateWithoutAssetsInput, AssetCategoryUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: AssetCategoryCreateOrConnectWithoutAssetsInput
    upsert?: AssetCategoryUpsertWithoutAssetsInput
    connect?: AssetCategoryWhereUniqueInput
    update?: XOR<XOR<AssetCategoryUpdateToOneWithWhereWithoutAssetsInput, AssetCategoryUpdateWithoutAssetsInput>, AssetCategoryUncheckedUpdateWithoutAssetsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedEnumLayoutElementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutElementType | EnumLayoutElementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LayoutElementType[] | ListEnumLayoutElementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LayoutElementType[] | ListEnumLayoutElementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLayoutElementTypeFilter<$PrismaModel> | $Enums.LayoutElementType
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumLayoutElementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutElementType | EnumLayoutElementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LayoutElementType[] | ListEnumLayoutElementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LayoutElementType[] | ListEnumLayoutElementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLayoutElementTypeWithAggregatesFilter<$PrismaModel> | $Enums.LayoutElementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLayoutElementTypeFilter<$PrismaModel>
    _max?: NestedEnumLayoutElementTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type LayoutCreateWithoutElementsInput = {
    id?: string
    name: string
    previewimage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayoutUncheckedCreateWithoutElementsInput = {
    id?: string
    name: string
    previewimage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayoutCreateOrConnectWithoutElementsInput = {
    where: LayoutWhereUniqueInput
    create: XOR<LayoutCreateWithoutElementsInput, LayoutUncheckedCreateWithoutElementsInput>
  }

  export type LayoutUpsertWithoutElementsInput = {
    update: XOR<LayoutUpdateWithoutElementsInput, LayoutUncheckedUpdateWithoutElementsInput>
    create: XOR<LayoutCreateWithoutElementsInput, LayoutUncheckedCreateWithoutElementsInput>
    where?: LayoutWhereInput
  }

  export type LayoutUpdateToOneWithWhereWithoutElementsInput = {
    where?: LayoutWhereInput
    data: XOR<LayoutUpdateWithoutElementsInput, LayoutUncheckedUpdateWithoutElementsInput>
  }

  export type LayoutUpdateWithoutElementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    previewimage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutUncheckedUpdateWithoutElementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    previewimage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutElementCreateWithoutLayoutInput = {
    id?: string
    type: $Enums.LayoutElementType
    label: string
    positionX: number
    positionY: number
    width?: number | null
    height?: number | null
    zIndex?: number | null
    defaultText?: string | null
    fontSize?: number | null
    color?: string | null
    fontFamily?: string | null
    fontWeight?: string | null
    imageUrl?: string | null
  }

  export type LayoutElementUncheckedCreateWithoutLayoutInput = {
    id?: string
    type: $Enums.LayoutElementType
    label: string
    positionX: number
    positionY: number
    width?: number | null
    height?: number | null
    zIndex?: number | null
    defaultText?: string | null
    fontSize?: number | null
    color?: string | null
    fontFamily?: string | null
    fontWeight?: string | null
    imageUrl?: string | null
  }

  export type LayoutElementCreateOrConnectWithoutLayoutInput = {
    where: LayoutElementWhereUniqueInput
    create: XOR<LayoutElementCreateWithoutLayoutInput, LayoutElementUncheckedCreateWithoutLayoutInput>
  }

  export type LayoutElementCreateManyLayoutInputEnvelope = {
    data: LayoutElementCreateManyLayoutInput | LayoutElementCreateManyLayoutInput[]
  }

  export type LayoutElementUpsertWithWhereUniqueWithoutLayoutInput = {
    where: LayoutElementWhereUniqueInput
    update: XOR<LayoutElementUpdateWithoutLayoutInput, LayoutElementUncheckedUpdateWithoutLayoutInput>
    create: XOR<LayoutElementCreateWithoutLayoutInput, LayoutElementUncheckedCreateWithoutLayoutInput>
  }

  export type LayoutElementUpdateWithWhereUniqueWithoutLayoutInput = {
    where: LayoutElementWhereUniqueInput
    data: XOR<LayoutElementUpdateWithoutLayoutInput, LayoutElementUncheckedUpdateWithoutLayoutInput>
  }

  export type LayoutElementUpdateManyWithWhereWithoutLayoutInput = {
    where: LayoutElementScalarWhereInput
    data: XOR<LayoutElementUpdateManyMutationInput, LayoutElementUncheckedUpdateManyWithoutLayoutInput>
  }

  export type LayoutElementScalarWhereInput = {
    AND?: LayoutElementScalarWhereInput | LayoutElementScalarWhereInput[]
    OR?: LayoutElementScalarWhereInput[]
    NOT?: LayoutElementScalarWhereInput | LayoutElementScalarWhereInput[]
    id?: StringFilter<"LayoutElement"> | string
    layoutId?: StringFilter<"LayoutElement"> | string
    type?: EnumLayoutElementTypeFilter<"LayoutElement"> | $Enums.LayoutElementType
    label?: StringFilter<"LayoutElement"> | string
    positionX?: IntFilter<"LayoutElement"> | number
    positionY?: IntFilter<"LayoutElement"> | number
    width?: IntNullableFilter<"LayoutElement"> | number | null
    height?: IntNullableFilter<"LayoutElement"> | number | null
    zIndex?: IntNullableFilter<"LayoutElement"> | number | null
    defaultText?: StringNullableFilter<"LayoutElement"> | string | null
    fontSize?: IntNullableFilter<"LayoutElement"> | number | null
    color?: StringNullableFilter<"LayoutElement"> | string | null
    fontFamily?: StringNullableFilter<"LayoutElement"> | string | null
    fontWeight?: StringNullableFilter<"LayoutElement"> | string | null
    imageUrl?: StringNullableFilter<"LayoutElement"> | string | null
  }

  export type AssetCreateWithoutCategoryInput = {
    id?: string
    name: string
    imgUrl: string
    imgKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    imgUrl: string
    imgKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetCreateOrConnectWithoutCategoryInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutCategoryInput, AssetUncheckedCreateWithoutCategoryInput>
  }

  export type AssetCreateManyCategoryInputEnvelope = {
    data: AssetCreateManyCategoryInput | AssetCreateManyCategoryInput[]
  }

  export type AssetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutCategoryInput, AssetUncheckedUpdateWithoutCategoryInput>
    create: XOR<AssetCreateWithoutCategoryInput, AssetUncheckedCreateWithoutCategoryInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutCategoryInput, AssetUncheckedUpdateWithoutCategoryInput>
  }

  export type AssetUpdateManyWithWhereWithoutCategoryInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    imgUrl?: StringFilter<"Asset"> | string
    imgKey?: StringFilter<"Asset"> | string
    categoryId?: StringFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
  }

  export type AssetCategoryCreateWithoutAssetsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetCategoryUncheckedCreateWithoutAssetsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetCategoryCreateOrConnectWithoutAssetsInput = {
    where: AssetCategoryWhereUniqueInput
    create: XOR<AssetCategoryCreateWithoutAssetsInput, AssetCategoryUncheckedCreateWithoutAssetsInput>
  }

  export type AssetCategoryUpsertWithoutAssetsInput = {
    update: XOR<AssetCategoryUpdateWithoutAssetsInput, AssetCategoryUncheckedUpdateWithoutAssetsInput>
    create: XOR<AssetCategoryCreateWithoutAssetsInput, AssetCategoryUncheckedCreateWithoutAssetsInput>
    where?: AssetCategoryWhereInput
  }

  export type AssetCategoryUpdateToOneWithWhereWithoutAssetsInput = {
    where?: AssetCategoryWhereInput
    data: XOR<AssetCategoryUpdateWithoutAssetsInput, AssetCategoryUncheckedUpdateWithoutAssetsInput>
  }

  export type AssetCategoryUpdateWithoutAssetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCategoryUncheckedUpdateWithoutAssetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutElementCreateManyLayoutInput = {
    id?: string
    type: $Enums.LayoutElementType
    label: string
    positionX: number
    positionY: number
    width?: number | null
    height?: number | null
    zIndex?: number | null
    defaultText?: string | null
    fontSize?: number | null
    color?: string | null
    fontFamily?: string | null
    fontWeight?: string | null
    imageUrl?: string | null
  }

  export type LayoutElementUpdateWithoutLayoutInput = {
    type?: EnumLayoutElementTypeFieldUpdateOperationsInput | $Enums.LayoutElementType
    label?: StringFieldUpdateOperationsInput | string
    positionX?: IntFieldUpdateOperationsInput | number
    positionY?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    defaultText?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayoutElementUncheckedUpdateWithoutLayoutInput = {
    type?: EnumLayoutElementTypeFieldUpdateOperationsInput | $Enums.LayoutElementType
    label?: StringFieldUpdateOperationsInput | string
    positionX?: IntFieldUpdateOperationsInput | number
    positionY?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    defaultText?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LayoutElementUncheckedUpdateManyWithoutLayoutInput = {
    type?: EnumLayoutElementTypeFieldUpdateOperationsInput | $Enums.LayoutElementType
    label?: StringFieldUpdateOperationsInput | string
    positionX?: IntFieldUpdateOperationsInput | number
    positionY?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    defaultText?: NullableStringFieldUpdateOperationsInput | string | null
    fontSize?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    fontWeight?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetCreateManyCategoryInput = {
    id?: string
    name: string
    imgUrl: string
    imgKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    imgKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
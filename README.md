# typescript-study
typescript study


## 타입스크립트란 무엇인가?
- javascript 에 타입(type) 기능을 추가한 스크립트
- 타입스크립트는 es5, es6 의 모든 문법을 포함하고 esNext 의 모든 문법을 포함
- 마이크로소프트가 개발하고 유지하고 있는 오픈소스 프로그래밍 언어(2012년 말에 발표)
- esNext -> 자바스크립트의 공식 표준을 ECMAScript 다. ES6(ES2015) 이후 버전을 통틀어 가리킬 때는 esNext 라고 한다.

## 자바스크립트에 type 이 있으면 좋은 이유

```
function makePerson(name, age) {}

makePerson(32, 'test');  -> 이럴경우, 오류가 발생하면 상당히 당황스러울거다.

만약 타입이 있다면?

function makePerson(name: string, age: number) {}

위와 같이 타입이 존재하면 오류가 발생하지 않을거다.
(타입스크립트 컴파일러가 친절하게 컴파일 에러로 알려준다)
```

## 타입스크립트 컴파일러 설치

```
// typescript 패키지 설치
npm -i -g typescript
tsc -v

hello.ts 파일 생성

tsc src/hello.ts

컴파일이 완료되서, hello.js 파일이 생성이 된다.

node src/hello.js 

```

## ts-node 패키지 설치
- tsc(타입스크립트 컴파일러)는 ES5 형식의 자바스크립트 코드로 변환만 할 뿐 실행하지는 않는다.

```
npm i -g ts-node
ts-node -v

ts-node src/hello.ts
```

## @types/node 패키지 설치
- 타입스크립트는 기본적으로 esNext 문법을 포함하고 있지만, 노드에서 사용하는 특정 유형(require 라던가, Promise 라던가)은 모르기 때문에 설치
- 
```
npm i -D @types/node

```

## tsconfig.json 파일 작성

```
tsc --init

// tsconfig.json

{
  "compilerOptions" : {}, // tsc 명령 옵션
  "include" : [], // 대상 파일 목록
}

{
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}

```

## index.ts 작성
- index 로 짓는 이유는 node 또는 ts-node 로 실행을 하면 index 파일명 생략 가능

```
ts-node ./src/index.ts
ts-node ./src

```

## package.json 수정
- scripts 항목을 수정

```

"scripts": {
    "dev" : "ts-node ./src",
    "build" : "tsc && node ./dist",
    "test": "echo \"Error: no test specified\" && exit 1"
}

```
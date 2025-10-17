(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/_e0bc4b._.js", {

"[project]/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ensureInstrumentationRegistered": ()=>ensureInstrumentationRegistered
});
async function registerInstrumentation() {
    const register = "_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && (await _ENTRIES.middleware_instrumentation).register;
    if (register) {
        try {
            await register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if ("TURBOPACK compile-time truthy", 1) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== global.process) {
        // prefer local process but global.process has correct "env"
        process.env = global.process.env;
        global.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PageSignatureError": ()=>PageSignatureError,
    "RemovedPageError": ()=>RemovedPageError,
    "RemovedUAError": ()=>RemovedUAError
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

})()),
"[project]/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ACTION_SUFFIX": ()=>ACTION_SUFFIX,
    "APP_DIR_ALIAS": ()=>APP_DIR_ALIAS,
    "CACHE_ONE_YEAR": ()=>CACHE_ONE_YEAR,
    "DOT_NEXT_ALIAS": ()=>DOT_NEXT_ALIAS,
    "ESLINT_DEFAULT_DIRS": ()=>ESLINT_DEFAULT_DIRS,
    "GSP_NO_RETURNED_VALUE": ()=>GSP_NO_RETURNED_VALUE,
    "GSSP_COMPONENT_MEMBER_ERROR": ()=>GSSP_COMPONENT_MEMBER_ERROR,
    "GSSP_NO_RETURNED_VALUE": ()=>GSSP_NO_RETURNED_VALUE,
    "INSTRUMENTATION_HOOK_FILENAME": ()=>INSTRUMENTATION_HOOK_FILENAME,
    "MIDDLEWARE_FILENAME": ()=>MIDDLEWARE_FILENAME,
    "MIDDLEWARE_LOCATION_REGEXP": ()=>MIDDLEWARE_LOCATION_REGEXP,
    "NEXT_BODY_SUFFIX": ()=>NEXT_BODY_SUFFIX,
    "NEXT_CACHE_IMPLICIT_TAG_ID": ()=>NEXT_CACHE_IMPLICIT_TAG_ID,
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER": ()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER,
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER": ()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER,
    "NEXT_CACHE_SOFT_TAGS_HEADER": ()=>NEXT_CACHE_SOFT_TAGS_HEADER,
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH": ()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH,
    "NEXT_CACHE_TAGS_HEADER": ()=>NEXT_CACHE_TAGS_HEADER,
    "NEXT_CACHE_TAG_MAX_ITEMS": ()=>NEXT_CACHE_TAG_MAX_ITEMS,
    "NEXT_CACHE_TAG_MAX_LENGTH": ()=>NEXT_CACHE_TAG_MAX_LENGTH,
    "NEXT_DATA_SUFFIX": ()=>NEXT_DATA_SUFFIX,
    "NEXT_INTERCEPTION_MARKER_PREFIX": ()=>NEXT_INTERCEPTION_MARKER_PREFIX,
    "NEXT_META_SUFFIX": ()=>NEXT_META_SUFFIX,
    "NEXT_QUERY_PARAM_PREFIX": ()=>NEXT_QUERY_PARAM_PREFIX,
    "NON_STANDARD_NODE_ENV": ()=>NON_STANDARD_NODE_ENV,
    "PAGES_DIR_ALIAS": ()=>PAGES_DIR_ALIAS,
    "PRERENDER_REVALIDATE_HEADER": ()=>PRERENDER_REVALIDATE_HEADER,
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER": ()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER,
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT": ()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT,
    "ROOT_DIR_ALIAS": ()=>ROOT_DIR_ALIAS,
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS": ()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS,
    "RSC_ACTION_ENCRYPTION_ALIAS": ()=>RSC_ACTION_ENCRYPTION_ALIAS,
    "RSC_ACTION_PROXY_ALIAS": ()=>RSC_ACTION_PROXY_ALIAS,
    "RSC_ACTION_VALIDATE_ALIAS": ()=>RSC_ACTION_VALIDATE_ALIAS,
    "RSC_MOD_REF_PROXY_ALIAS": ()=>RSC_MOD_REF_PROXY_ALIAS,
    "RSC_PREFETCH_SUFFIX": ()=>RSC_PREFETCH_SUFFIX,
    "RSC_SUFFIX": ()=>RSC_SUFFIX,
    "SERVER_PROPS_EXPORT_ERROR": ()=>SERVER_PROPS_EXPORT_ERROR,
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT": ()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT,
    "SERVER_PROPS_SSG_CONFLICT": ()=>SERVER_PROPS_SSG_CONFLICT,
    "SERVER_RUNTIME": ()=>SERVER_RUNTIME,
    "SSG_FALLBACK_EXPORT_ERROR": ()=>SSG_FALLBACK_EXPORT_ERROR,
    "SSG_GET_INITIAL_PROPS_CONFLICT": ()=>SSG_GET_INITIAL_PROPS_CONFLICT,
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR": ()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR,
    "UNSTABLE_REVALIDATE_RENAME_ERROR": ()=>UNSTABLE_REVALIDATE_RENAME_ERROR,
    "WEBPACK_LAYERS": ()=>WEBPACK_LAYERS,
    "WEBPACK_RESOURCE_QUERIES": ()=>WEBPACK_RESOURCE_QUERIES
});
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
const RSC_SUFFIX = ".rsc";
const ACTION_SUFFIX = ".action";
const NEXT_DATA_SUFFIX = ".json";
const NEXT_META_SUFFIX = ".meta";
const NEXT_BODY_SUFFIX = ".body";
const NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
const NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
const CACHE_ONE_YEAR = 31536000;
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
const RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead.";
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    "app",
    "pages",
    "components",
    "lib",
    "src"
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "action-browser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for the instrumentation hooks.
   */ instrument: "instrument",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route",
    /**
   * The layer for the server bundle for App Route handlers.
   */ appRouteHandler: "app-route-handler"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.instrument
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        nonClientServerTarget: [
            // middleware and pages api
            WEBPACK_LAYERS_NAMES.middleware,
            WEBPACK_LAYERS_NAMES.api
        ],
        app: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
};
;
 //# sourceMappingURL=constants.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "fromNodeOutgoingHttpHeaders": ()=>fromNodeOutgoingHttpHeaders,
    "normalizeNextQueryParam": ()=>normalizeNextQueryParam,
    "splitCookiesString": ()=>splitCookiesString,
    "toNodeOutgoingHttpHeaders": ()=>toNodeOutgoingHttpHeaders,
    "validateURL": ()=>validateURL
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}
function normalizeNextQueryParam(key, onKeyNormalized) {
    const prefixes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"]
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            const normalizedKey = key.substring(prefix.length);
            onKeyNormalized(normalizedKey);
        }
    }
} //# sourceMappingURL=utils.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NextFetchEvent": ()=>NextFetchEvent,
    "waitUntilSymbol": ()=>waitUntilSymbol
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "detectDomainLocale": ()=>detectDomainLocale
});
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ __turbopack_esm__({
    "removeTrailingSlash": ()=>removeTrailingSlash
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ __turbopack_esm__({
    "parsePath": ()=>parsePath
});
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addPathPrefix": ()=>addPathPrefix
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addPathSuffix": ()=>addPathSuffix
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "pathHasPrefix": ()=>pathHasPrefix
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addLocale": ()=>addLocale
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, "/api")) return path;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "formatNextPathnameInfo": ()=>formatNextPathnameInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function formatNextPathnameInfo(info) {
    let pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addLocale"])(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
    }
    if (info.buildId) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])(pathname, "/") : pathname : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ __turbopack_esm__({
    "getHostname": ()=>getHostname
});
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":", 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ __turbopack_esm__({
    "normalizeLocalePath": ()=>normalizeLocalePath
});
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "removePathPrefix": ()=>removePathPrefix
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getNextPathnameInfo": ()=>getNextPathnameInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(info.pathname, basePath)) {
        info.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removePathPrefix"])(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NextURL": ()=>NextURL
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getNextPathnameInfo"])(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getHostname"])(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["detectDomainLocale"])((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["formatNextPathnameInfo"])({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map

})()),
"[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});

}.call(this) }),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
 //# sourceMappingURL=cookies.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "INTERNALS": ()=>INTERNALS,
    "NextRequest": ()=>NextRequest
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](url, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedPageError"]();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedUAError"]();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ReflectAdapter": ()=>ReflectAdapter
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NextResponse": ()=>NextResponse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        const headers = this.headers;
        const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
        const cookiesProxy = new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "delete":
                    case "set":
                        {
                            return (...args)=>{
                                const result = Reflect.apply(target[prop], target, args);
                                const newHeaders = new Headers(headers);
                                if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"]) {
                                    headers.set("x-middleware-set-cookie", result.getAll().map((cookie)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stringifyCookie"])(cookie)).join(","));
                                }
                                handleMiddlewareField(init, newHeaders);
                                return result;
                            };
                        }
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        this[INTERNALS] = {
            cookies: cookiesProxy,
            url: init.url ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](init.url, {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ __turbopack_esm__({
    "relativizeURL": ()=>relativizeURL
});
function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

})()),
"[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ACTION": ()=>ACTION,
    "FLIGHT_PARAMETERS": ()=>FLIGHT_PARAMETERS,
    "NEXT_DID_POSTPONE_HEADER": ()=>NEXT_DID_POSTPONE_HEADER,
    "NEXT_ROUTER_PREFETCH_HEADER": ()=>NEXT_ROUTER_PREFETCH_HEADER,
    "NEXT_ROUTER_STATE_TREE": ()=>NEXT_ROUTER_STATE_TREE,
    "NEXT_RSC_UNION_QUERY": ()=>NEXT_RSC_UNION_QUERY,
    "NEXT_URL": ()=>NEXT_URL,
    "RSC_CONTENT_TYPE_HEADER": ()=>RSC_CONTENT_TYPE_HEADER,
    "RSC_HEADER": ()=>RSC_HEADER
});
const RSC_HEADER = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const FLIGHT_PARAMETERS = [
    [
        RSC_HEADER
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH_HEADER
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed"; //# sourceMappingURL=app-router-headers.js.map

})()),
"[project]/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "stripInternalQueries": ()=>stripInternalQueries,
    "stripInternalSearchParams": ()=>stripInternalSearchParams
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
} //# sourceMappingURL=internal-utils.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_esm__({
    "ensureLeadingSlash": ()=>ensureLeadingSlash
});
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DEFAULT_SEGMENT_KEY": ()=>DEFAULT_SEGMENT_KEY,
    "PAGE_SEGMENT_KEY": ()=>PAGE_SEGMENT_KEY,
    "isGroupSegment": ()=>isGroupSegment
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === "(" && segment.endsWith(")");
}
const PAGE_SEGMENT_KEY = "__PAGE__";
const DEFAULT_SEGMENT_KEY = "__DEFAULT__"; //# sourceMappingURL=segment.js.map

})()),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "normalizeAppPath": ()=>normalizeAppPath,
    "normalizeRscURL": ()=>normalizeRscURL
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, "$1");
} //# sourceMappingURL=app-paths.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HeadersAdapter": ()=>HeadersAdapter,
    "ReadonlyHeadersError": ()=>ReadonlyHeadersError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map

})()),
"[project]/node_modules/next/dist/esm/client/components/async-local-storage.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "createAsyncLocalStorage": ()=>createAsyncLocalStorage
});
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
} //# sourceMappingURL=async-local-storage.js.map

})()),
"[project]/node_modules/next/dist/esm/client/components/static-generation-async-storage-instance.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "staticGenerationAsyncStorage": ()=>staticGenerationAsyncStorage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/async-local-storage.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const staticGenerationAsyncStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=static-generation-async-storage-instance.js.map

})()),
"[project]/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
"TURBOPACK { transition: next-shared }";
;
;
 //# sourceMappingURL=static-generation-async-storage.external.js.map

})()),
"[project]/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/static-generation-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MutableRequestCookiesAdapter": ()=>MutableRequestCookiesAdapter,
    "ReadonlyRequestCookiesError": ()=>ReadonlyRequestCookiesError,
    "RequestCookiesAdapter": ()=>RequestCookiesAdapter,
    "appendMutableCookies": ()=>appendMutableCookies,
    "getModifiedCookieValues": ()=>getModifiedCookieValues
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/static-generation-async-storage-instance.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["staticGenerationAsyncStorage"].getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map

})()),
"[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ __turbopack_esm__({
    "AppRenderSpan": ()=>AppRenderSpan,
    "AppRouteRouteHandlersSpan": ()=>AppRouteRouteHandlersSpan,
    "BaseServerSpan": ()=>BaseServerSpan,
    "LoadComponentsSpan": ()=>LoadComponentsSpan,
    "LogSpanAllowList": ()=>LogSpanAllowList,
    "MiddlewareSpan": ()=>MiddlewareSpan,
    "NextNodeServerSpan": ()=>NextNodeServerSpan,
    "NextServerSpan": ()=>NextServerSpan,
    "NextVanillaSpanAllowlist": ()=>NextVanillaSpanAllowlist,
    "NodeSpan": ()=>NodeSpan,
    "RenderSpan": ()=>RenderSpan,
    "ResolveMetadataSpan": ()=>ResolveMetadataSpan,
    "RouterSpan": ()=>RouterSpan,
    "StartServerSpan": ()=>StartServerSpan
});
var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
var MiddlewareSpan;
(function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
})(MiddlewareSpan || (MiddlewareSpan = {}));
const NextVanillaSpanAllowlist = [
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
];
const LogSpanAllowList = [
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
];
;
 //# sourceMappingURL=constants.js.map

})()),
"[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : global;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();

}.call(this) }),
"[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SpanKind": ()=>SpanKind,
    "SpanStatusCode": ()=>SpanStatusCode,
    "getTracer": ()=>getTracer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time truthy", 1) {
    api = __turbopack_require__("[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js [middleware] (ecmascript)");
} else {
    "TURBOPACK unreachable";
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
const isPromise = (p)=>{
    return p !== null && typeof p === "object" && typeof p.then === "function";
};
const closeSpanWithError = (span, error)=>{
    if ((error == null ? void 0 : error.bubble) === true) {
        span.setAttribute("next.bubble", true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey("next.rootSpanId");
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer("next.js", "0.0.1");
    }
    getContext() {
        return context;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === "function" ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(type) && process.env.NEXT_OTEL_VERBOSE !== "1" || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            "next.span_name": spanName,
            "next.span_type": type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const startTime = "performance" in globalThis ? globalThis.performance.now() : undefined;
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LogSpanAllowList"].includes(type || "")) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split(".").pop() || "").replace(/[A-Z]/g, (match)=>"-" + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if (isPromise(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(name) && process.env.NEXT_OTEL_VERBOSE !== "1") {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === "function" && typeof fn === "function") {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === "function") {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
 //# sourceMappingURL=tracer.js.map

})()),
"[project]/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();

}.call(this) }),
"[project]/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ApiError": ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS": ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA": ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT": ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES": ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA": ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate": ()=>checkIsOnDemandRevalidate,
    "clearPreviewData": ()=>clearPreviewData,
    "redirect": ()=>redirect,
    "sendError": ()=>sendError,
    "sendStatusCode": ()=>sendStatusCode,
    "setLazyProp": ()=>setLazyProp,
    "wrapApiHandler": ()=>wrapApiHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        var _getTracer_getRootSpanAttributes;
        (_getTracer_getRootSpanAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().getRootSpanAttributes()) == null ? void 0 : _getTracer_getRootSpanAttributes.set("next.route", page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map

})()),
"[project]/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DraftModeProvider": ()=>DraftModeProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["checkIsOnDemandRevalidate"])(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"])) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && (cookieValue === previewProps.previewModeId || // In dev mode, the cookie can be actual hash value preview id but the preview props can still be `development-id`.
        ("TURBOPACK compile-time value", "development") !== "production" && previewProps.previewModeId === "development-id"));
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error("Invariant: previewProps missing previewModeId this should never happen");
        }
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: this._previewModeId,
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/"
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: "",
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/",
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map

})()),
"[project]/node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "RequestAsyncStorageWrapper": ()=>RequestAsyncStorageWrapper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function getHeaders(headers) {
    const cleaned = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers);
    for (const param of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_PARAMETERS"]){
        cleaned.delete(param.toString().toLowerCase());
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].seal(cleaned);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MutableRequestCookiesAdapter"].wrap(cookies, onUpdateCookies);
}
/**
 * If middleware set cookies in this request (indicated by `x-middleware-set-cookie`),
 * then merge those into the existing cookie object, so that when `cookies()` is accessed
 * it's able to read the newly set cookies.
 */ function mergeMiddlewareCookies(req, existingCookies) {
    if ("x-middleware-set-cookie" in req.headers && typeof req.headers["x-middleware-set-cookie"] === "string") {
        const setCookieValue = req.headers["x-middleware-set-cookie"];
        const responseHeaders = new Headers();
        for (const cookie of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["splitCookiesString"])(setCookieValue)){
            responseHeaders.append("set-cookie", cookie);
        }
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](responseHeaders);
        // Transfer cookies from ResponseCookies to RequestCookies
        for (const cookie of responseCookies.getAll()){
            existingCookies.set(cookie);
        }
    }
}
const RequestAsyncStorageWrapper = {
    /**
   * Wrap the callback with the given store so it can access the underlying
   * store using hooks.
   *
   * @param storage underlying storage object returned by the module
   * @param context context to seed the store
   * @param callback function to call within the scope of the context
   * @returns the result returned by the callback
   */ wrap (storage, { req, res, renderOpts }, callback) {
        let previewProps = undefined;
        if (renderOpts && "previewProps" in renderOpts) {
            // TODO: investigate why previewProps isn't on RenderOpts
            previewProps = renderOpts.previewProps;
        }
        function defaultOnUpdateCookies(cookies) {
            if (res) {
                res.setHeader("Set-Cookie", cookies);
            }
        }
        const cache = {};
        const store = {
            get headers () {
                if (!cache.headers) {
                    // Seal the headers object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.headers = getHeaders(req.headers);
                }
                return cache.headers;
            },
            get cookies () {
                if (!cache.cookies) {
                    // if middleware is setting cookie(s), then include those in
                    // the initial cached cookies so they can be read in render
                    const requestCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers));
                    mergeMiddlewareCookies(req, requestCookies);
                    // Seal the cookies object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.cookies = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal(requestCookies);
                }
                return cache.cookies;
            },
            get mutableCookies () {
                if (!cache.mutableCookies) {
                    const mutableCookies = getMutableCookies(req.headers, (renderOpts == null ? void 0 : renderOpts.onUpdateCookies) || (res ? defaultOnUpdateCookies : undefined));
                    mergeMiddlewareCookies(req, mutableCookies);
                    cache.mutableCookies = mutableCookies;
                }
                return cache.mutableCookies;
            },
            get draftMode () {
                if (!cache.draftMode) {
                    cache.draftMode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DraftModeProvider"](previewProps, req, this.cookies, this.mutableCookies);
                }
                return cache.draftMode;
            },
            reactLoadableManifest: (renderOpts == null ? void 0 : renderOpts.reactLoadableManifest) || {},
            assetPrefix: (renderOpts == null ? void 0 : renderOpts.assetPrefix) || ""
        };
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=request-async-storage-wrapper.js.map

})()),
"[project]/node_modules/next/dist/esm/client/components/request-async-storage-instance.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "requestAsyncStorage": ()=>requestAsyncStorage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/async-local-storage.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const requestAsyncStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=request-async-storage-instance.js.map

})()),
"[project]/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getExpectedRequestStore": ()=>getExpectedRequestStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/request-async-storage-instance.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-shared }";
;
;
function getExpectedRequestStore(callingExpression) {
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["requestAsyncStorage"].getStore();
    if (store) return store;
    throw new Error("`" + callingExpression + "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context");
} //# sourceMappingURL=request-async-storage.external.js.map

})()),
"[project]/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/request-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/next/dist/esm/server/web/get-edge-preview-props.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * In edge runtime, these props directly accessed from environment variables.
 *   - local: env vars will be injected through edge-runtime as runtime env vars
 *   - deployment: env vars will be replaced by edge build pipeline
 */ __turbopack_esm__({
    "getEdgePreviewProps": ()=>getEdgePreviewProps
});
function getEdgePreviewProps() {
    return {
        previewModeId: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "development-id",
        previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "",
        previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || ""
    };
} //# sourceMappingURL=get-edge-preview-props.js.map

})()),
"[project]/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getTestReqInfo: null,
    withRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getTestReqInfo: function() {
        return getTestReqInfo;
    },
    withRequest: function() {
        return withRequest;
    }
});
const _nodeasync_hooks = require("node:async_hooks");
const testStorage = new _nodeasync_hooks.AsyncLocalStorage();
function extractTestInfoFromRequest(req, reader) {
    const proxyPortHeader = reader.header(req, "next-test-proxy-port");
    if (!proxyPortHeader) {
        return undefined;
    }
    const url = reader.url(req);
    const proxyPort = Number(proxyPortHeader);
    const testData = reader.header(req, "next-test-data") || "";
    return {
        url,
        proxyPort,
        testData
    };
}
function withRequest(req, reader, fn) {
    const testReqInfo = extractTestInfoFromRequest(req, reader);
    if (!testReqInfo) {
        return fn();
    }
    return testStorage.run(testReqInfo, fn);
}
function getTestReqInfo(req, reader) {
    const testReqInfo = testStorage.getStore();
    if (testReqInfo) {
        return testReqInfo;
    }
    if (req && reader) {
        return extractTestInfoFromRequest(req, reader);
    }
    return undefined;
} //# sourceMappingURL=context.js.map

}.call(this) }),
"[project]/node_modules/next/dist/experimental/testmode/fetch.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__commonjs__external__node$3a$buffer__ = __turbopack_external_require__("node:buffer", true);
var __TURBOPACK__commonjs__external__node$3a$buffer__ = __turbopack_external_require__("node:buffer", true);
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleFetch: null,
    interceptFetch: null,
    reader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleFetch: function() {
        return handleFetch;
    },
    interceptFetch: function() {
        return interceptFetch;
    },
    reader: function() {
        return reader;
    }
});
const _context = __turbopack_require__("[project]/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)");
const reader = {
    url (req) {
        return req.url;
    },
    header (req, name) {
        return req.headers.get(name);
    }
};
function getTestStack() {
    let stack = (new Error().stack ?? "").split("\n");
    // Skip the first line and find first non-empty line.
    for(let i = 1; i < stack.length; i++){
        if (stack[i].length > 0) {
            stack = stack.slice(i);
            break;
        }
    }
    // Filter out franmework lines.
    stack = stack.filter((f)=>!f.includes("/next/dist/"));
    // At most 5 lines.
    stack = stack.slice(0, 5);
    // Cleanup some internal info and trim.
    stack = stack.map((s)=>s.replace("webpack-internal:///(rsc)/", "").trim());
    return stack.join("    ");
}
async function buildProxyRequest(testData, request) {
    const { url, method, headers, body, cache, credentials, integrity, mode, redirect, referrer, referrerPolicy } = request;
    return {
        testData,
        api: "fetch",
        request: {
            url,
            method,
            headers: [
                ...Array.from(headers),
                [
                    "next-test-stack",
                    getTestStack()
                ]
            ],
            body: body ? __TURBOPACK__commonjs__external__node$3a$buffer__["Buffer"].from(await request.arrayBuffer()).toString("base64") : null,
            cache,
            credentials,
            integrity,
            mode,
            redirect,
            referrer,
            referrerPolicy
        }
    };
}
function buildResponse(proxyResponse) {
    const { status, headers, body } = proxyResponse.response;
    return new Response(body ? __TURBOPACK__commonjs__external__node$3a$buffer__["Buffer"].from(body, "base64") : null, {
        status,
        headers: new Headers(headers)
    });
}
async function handleFetch(originalFetch, request) {
    const testInfo = (0, _context.getTestReqInfo)(request, reader);
    if (!testInfo) {
        // Passthrough non-test requests.
        return originalFetch(request);
    }
    const { testData, proxyPort } = testInfo;
    const proxyRequest = await buildProxyRequest(testData, request);
    const resp = await originalFetch(`http://localhost:${proxyPort}`, {
        method: "POST",
        body: JSON.stringify(proxyRequest),
        next: {
            // @ts-ignore
            internal: true
        }
    });
    if (!resp.ok) {
        throw new Error(`Proxy request failed: ${resp.status}`);
    }
    const proxyResponse = await resp.json();
    const { api } = proxyResponse;
    switch(api){
        case "continue":
            return originalFetch(request);
        case "abort":
        case "unhandled":
            throw new Error(`Proxy request aborted [${request.method} ${request.url}]`);
        default:
            break;
    }
    return buildResponse(proxyResponse);
}
function interceptFetch(originalFetch) {
    global.fetch = function testFetch(input, init) {
        var _init_next;
        // Passthrough internal requests.
        // @ts-ignore
        if (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) {
            return originalFetch(input, init);
        }
        return handleFetch(originalFetch, new Request(input, init));
    };
    return ()=>{
        global.fetch = originalFetch;
    };
} //# sourceMappingURL=fetch.js.map

}.call(this) }),
"[project]/node_modules/next/dist/experimental/testmode/server-edge.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    interceptTestApis: null,
    wrapRequestHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    interceptTestApis: function() {
        return interceptTestApis;
    },
    wrapRequestHandler: function() {
        return wrapRequestHandler;
    }
});
const _context = __turbopack_require__("[project]/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)");
const _fetch = __turbopack_require__("[project]/node_modules/next/dist/experimental/testmode/fetch.js [middleware] (ecmascript)");
function interceptTestApis() {
    return (0, _fetch.interceptFetch)(global.fetch);
}
function wrapRequestHandler(handler) {
    return (req, fn)=>(0, _context.withRequest)(req, _fetch.reader, ()=>handler(req, fn));
} //# sourceMappingURL=server-edge.js.map

}.call(this) }),
"[project]/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NextRequestHint": ()=>NextRequestHint,
    "adapter": ()=>adapter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$async$2d$storage$2d$wrapper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/request-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/get-edge-preview-props.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class NextRequestHint extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextRequest"] {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
}
const headersGetter = {
    keys: (headers)=>Array.from(headers.keys()),
    get: (headers, key)=>headers.get(key) ?? undefined
};
let propagator = (request, fn)=>{
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])();
    return tracer.withPropagatedContext(request.headers, fn, headersGetter);
};
let testApisIntercepted = false;
function ensureTestApisIntercepted() {
    if (!testApisIntercepted) {
        testApisIntercepted = true;
        if (process.env.NEXT_PRIVATE_TEST_PROXY === "true") {
            const { interceptTestApis, wrapRequestHandler } = __turbopack_require__("[project]/node_modules/next/dist/experimental/testmode/server-edge.js [middleware] (ecmascript)");
            interceptTestApis();
            propagator = wrapRequestHandler(propagator);
        }
    }
}
async function adapter(params) {
    ensureTestApisIntercepted();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureInstrumentationRegistered"])();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    params.request.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeRscURL"])(params.request.url);
    const requestUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeNextQueryParam"])(key, (normalizedKey)=>{
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        });
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isNextDataRequest = params.request.headers["x-nextjs-data"];
    if (isNextDataRequest && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_PARAMETERS"]){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl = process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? new URL(params.request.url) : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stripInternalSearchParams"])(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isNextDataRequest) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (// leverage the shared instance if not we need
    // to create a fresh cache instance each time
    !globalThis.__incrementalCacheShared && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: ("TURBOPACK compile-time value", "development") !== "development",
            fetchCacheKeyPrefix: ("TURBOPACK compile-time value", ""),
            dev: ("TURBOPACK compile-time value", "development") === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getEdgePreviewProps"])()
                };
            }
        });
    }
    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextFetchEvent"]({
        request,
        page: params.page
    });
    let response;
    let cookiesFromResponse;
    response = await propagator(request, ()=>{
        // we only care to make async storage available for middleware
        const isMiddleware = params.page === "/middleware" || params.page === "/src/middleware";
        if (isMiddleware) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MiddlewareSpan"].execute, {
                spanName: `middleware ${request.method} ${request.nextUrl.pathname}`,
                attributes: {
                    "http.target": request.nextUrl.pathname,
                    "http.method": request.method
                }
            }, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$async$2d$storage$2d$wrapper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestAsyncStorageWrapper"].wrap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["requestAsyncStorage"], {
                    req: request,
                    renderOpts: {
                        onUpdateCookies: (cookies)=>{
                            cookiesFromResponse = cookies;
                        },
                        // @ts-expect-error: TODO: investigate why previewProps isn't on RenderOpts
                        previewProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getEdgePreviewProps"])()
                    }
                }, ()=>params.handler(request, event)));
        }
        return params.handler(request, event);
    });
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    if (response && cookiesFromResponse) {
        response.headers.set("set-cookie", cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite && !isEdgeRendering) {
        const rewriteUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (!process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["relativizeURL"])(String(rewriteUrl), String(requestUrl));
        if (isNextDataRequest && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(("TURBOPACK compile-time value", false) && relativizedRewrite.match(/http(s)?:\/\//))) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (!process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isNextDataRequest) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["relativizeURL"])(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["waitUntilSymbol"]]),
        fetchMetrics: request.fetchMetrics
    };
} //# sourceMappingURL=adapter.js.map

})()),
"[project]/node_modules/uncrypto/dist/crypto.web.mjs [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>_crypto,
    "getRandomValues": ()=>getRandomValues,
    "randomUUID": ()=>randomUUID,
    "subtle": ()=>subtle
});
const webCrypto = globalThis.crypto;
const subtle = webCrypto.subtle;
const randomUUID = ()=>{
    return webCrypto.randomUUID();
};
const getRandomValues = (array)=>{
    return webCrypto.getRandomValues(array);
};
const _crypto = {
    randomUUID,
    getRandomValues,
    subtle
};
;

})()),
"[project]/node_modules/@upstash/redis/chunk-TAJI6TAE.mjs [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HttpClient": ()=>HttpClient,
    "Redis": ()=>Redis,
    "VERSION": ()=>VERSION,
    "error_exports": ()=>error_exports
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uncrypto$2f$dist$2f$crypto$2e$web$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uncrypto/dist/crypto.web.mjs [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// pkg/error.ts
var error_exports = {};
__export(error_exports, {
    UpstashError: ()=>UpstashError,
    UpstashJSONParseError: ()=>UpstashJSONParseError,
    UrlError: ()=>UrlError
});
var UpstashError = class extends Error {
    constructor(message, options){
        super(message, options);
        this.name = "UpstashError";
    }
};
var UrlError = class extends Error {
    constructor(url){
        super(`Upstash Redis client was passed an invalid URL. You should pass a URL starting with https. Received: "${url}". `);
        this.name = "UrlError";
    }
};
var UpstashJSONParseError = class extends UpstashError {
    constructor(body, options){
        const truncatedBody = body.length > 200 ? body.slice(0, 200) + "..." : body;
        super(`Unable to parse response body: ${truncatedBody}`, options);
        this.name = "UpstashJSONParseError";
    }
};
// pkg/util.ts
function parseRecursive(obj) {
    const parsed = Array.isArray(obj) ? obj.map((o)=>{
        try {
            return parseRecursive(o);
        } catch  {
            return o;
        }
    }) : JSON.parse(obj);
    if (typeof parsed === "number" && parsed.toString() !== obj) {
        return obj;
    }
    return parsed;
}
function parseResponse(result) {
    try {
        return parseRecursive(result);
    } catch  {
        return result;
    }
}
function deserializeScanResponse(result) {
    return [
        result[0],
        ...parseResponse(result.slice(1))
    ];
}
function deserializeScanWithTypesResponse(result) {
    const [cursor, keys] = result;
    const parsedKeys = [];
    for(let i = 0; i < keys.length; i += 2){
        parsedKeys.push({
            key: keys[i],
            type: keys[i + 1]
        });
    }
    return [
        cursor,
        parsedKeys
    ];
}
function mergeHeaders(...headers) {
    const merged = {};
    for (const header of headers){
        if (!header) continue;
        for (const [key, value] of Object.entries(header)){
            if (value !== void 0 && value !== null) {
                merged[key] = value;
            }
        }
    }
    return merged;
}
// pkg/http.ts
var HttpClient = class {
    baseUrl;
    headers;
    options;
    readYourWrites;
    upstashSyncToken = "";
    hasCredentials;
    retry;
    constructor(config){
        this.options = {
            backend: config.options?.backend,
            agent: config.agent,
            responseEncoding: config.responseEncoding ?? "base64",
            // default to base64
            cache: config.cache,
            signal: config.signal,
            keepAlive: config.keepAlive ?? true
        };
        this.upstashSyncToken = "";
        this.readYourWrites = config.readYourWrites ?? true;
        this.baseUrl = (config.baseUrl || "").replace(/\/$/, "");
        const urlRegex = /^https?:\/\/[^\s#$./?].\S*$/;
        if (this.baseUrl && !urlRegex.test(this.baseUrl)) {
            throw new UrlError(this.baseUrl);
        }
        this.headers = {
            "Content-Type": "application/json",
            ...config.headers
        };
        this.hasCredentials = Boolean(this.baseUrl && this.headers.authorization.split(" ")[1]);
        if (this.options.responseEncoding === "base64") {
            this.headers["Upstash-Encoding"] = "base64";
        }
        this.retry = typeof config.retry === "boolean" && !config.retry ? {
            attempts: 1,
            backoff: ()=>0
        } : {
            attempts: config.retry?.retries ?? 5,
            backoff: config.retry?.backoff ?? ((retryCount)=>Math.exp(retryCount) * 50)
        };
    }
    mergeTelemetry(telemetry) {
        this.headers = merge(this.headers, "Upstash-Telemetry-Runtime", telemetry.runtime);
        this.headers = merge(this.headers, "Upstash-Telemetry-Platform", telemetry.platform);
        this.headers = merge(this.headers, "Upstash-Telemetry-Sdk", telemetry.sdk);
    }
    async request(req) {
        const requestHeaders = mergeHeaders(this.headers, req.headers ?? {});
        const requestUrl = [
            this.baseUrl,
            ...req.path ?? []
        ].join("/");
        const isEventStream = requestHeaders.Accept === "text/event-stream";
        const signal = req.signal ?? this.options.signal;
        const isSignalFunction = typeof signal === "function";
        const requestOptions = {
            //@ts-expect-error this should throw due to bun regression
            cache: this.options.cache,
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(req.body),
            keepalive: this.options.keepAlive,
            agent: this.options.agent,
            signal: isSignalFunction ? signal() : signal,
            /**
       * Fastly specific
       */ backend: this.options.backend
        };
        if (!this.hasCredentials) {
            console.warn("[Upstash Redis] Redis client was initialized without url or token. Failed to execute command.");
        }
        if (this.readYourWrites) {
            const newHeader = this.upstashSyncToken;
            this.headers["upstash-sync-token"] = newHeader;
        }
        let res = null;
        let error = null;
        for(let i = 0; i <= this.retry.attempts; i++){
            try {
                res = await fetch(requestUrl, requestOptions);
                break;
            } catch (error_) {
                if (requestOptions.signal?.aborted && isSignalFunction) {
                    throw error_;
                } else if (requestOptions.signal?.aborted) {
                    const myBlob = new Blob([
                        JSON.stringify({
                            result: requestOptions.signal.reason ?? "Aborted"
                        })
                    ]);
                    const myOptions = {
                        status: 200,
                        statusText: requestOptions.signal.reason ?? "Aborted"
                    };
                    res = new Response(myBlob, myOptions);
                    break;
                }
                error = error_;
                if (i < this.retry.attempts) {
                    await new Promise((r)=>setTimeout(r, this.retry.backoff(i)));
                }
            }
        }
        if (!res) {
            throw error ?? new Error("Exhausted all retries");
        }
        if (!res.ok) {
            let body2;
            const rawBody2 = await res.text();
            try {
                body2 = JSON.parse(rawBody2);
            } catch (error2) {
                throw new UpstashJSONParseError(rawBody2, {
                    cause: error2
                });
            }
            throw new UpstashError(`${body2.error}, command was: ${JSON.stringify(req.body)}`);
        }
        if (this.readYourWrites) {
            const headers = res.headers;
            this.upstashSyncToken = headers.get("upstash-sync-token") ?? "";
        }
        if (isEventStream && req && req.onMessage && res.body) {
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            (async ()=>{
                try {
                    while(true){
                        const { value, done } = await reader.read();
                        if (done) break;
                        const chunk = decoder.decode(value);
                        const lines = chunk.split("\n");
                        for (const line of lines){
                            if (line.startsWith("data: ")) {
                                const data = line.slice(6);
                                req.onMessage?.(data);
                            }
                        }
                    }
                } catch (error2) {
                    if (error2 instanceof Error && error2.name === "AbortError") {} else {
                        console.error("Stream reading error:", error2);
                    }
                } finally{
                    try {
                        await reader.cancel();
                    } catch  {}
                }
            })();
            return {
                result: 1
            };
        }
        let body;
        const rawBody = await res.text();
        try {
            body = JSON.parse(rawBody);
        } catch (error2) {
            throw new UpstashJSONParseError(rawBody, {
                cause: error2
            });
        }
        if (this.readYourWrites) {
            const headers = res.headers;
            this.upstashSyncToken = headers.get("upstash-sync-token") ?? "";
        }
        if (this.options.responseEncoding === "base64") {
            if (Array.isArray(body)) {
                return body.map(({ result: result2, error: error2 })=>({
                        result: decode(result2),
                        error: error2
                    }));
            }
            const result = decode(body.result);
            return {
                result,
                error: body.error
            };
        }
        return body;
    }
};
function base64decode(b64) {
    let dec = "";
    try {
        const binString = atob(b64);
        const size = binString.length;
        const bytes = new Uint8Array(size);
        for(let i = 0; i < size; i++){
            bytes[i] = binString.charCodeAt(i);
        }
        dec = new TextDecoder().decode(bytes);
    } catch  {
        dec = b64;
    }
    return dec;
}
function decode(raw) {
    let result = void 0;
    switch(typeof raw){
        case "undefined":
            {
                return raw;
            }
        case "number":
            {
                result = raw;
                break;
            }
        case "object":
            {
                if (Array.isArray(raw)) {
                    result = raw.map((v)=>typeof v === "string" ? base64decode(v) : Array.isArray(v) ? v.map((element)=>decode(element)) : v);
                } else {
                    result = null;
                }
                break;
            }
        case "string":
            {
                result = raw === "OK" ? "OK" : base64decode(raw);
                break;
            }
        default:
            {
                break;
            }
    }
    return result;
}
function merge(obj, key, value) {
    if (!value) {
        return obj;
    }
    obj[key] = obj[key] ? [
        obj[key],
        value
    ].join(",") : value;
    return obj;
}
// pkg/commands/command.ts
var defaultSerializer = (c)=>{
    switch(typeof c){
        case "string":
        case "number":
        case "boolean":
            {
                return c;
            }
        default:
            {
                return JSON.stringify(c);
            }
    }
};
var Command = class {
    command;
    serialize;
    deserialize;
    headers;
    path;
    onMessage;
    isStreaming;
    signal;
    /**
   * Create a new command instance.
   *
   * You can define a custom `deserialize` function. By default we try to deserialize as json.
   */ constructor(command, opts){
        this.serialize = defaultSerializer;
        this.deserialize = opts?.automaticDeserialization === void 0 || opts.automaticDeserialization ? opts?.deserialize ?? parseResponse : (x)=>x;
        this.command = command.map((c)=>this.serialize(c));
        this.headers = opts?.headers;
        this.path = opts?.path;
        this.onMessage = opts?.streamOptions?.onMessage;
        this.isStreaming = opts?.streamOptions?.isStreaming ?? false;
        this.signal = opts?.streamOptions?.signal;
        if (opts?.latencyLogging) {
            const originalExec = this.exec.bind(this);
            this.exec = async (client)=>{
                const start = performance.now();
                const result = await originalExec(client);
                const end = performance.now();
                const loggerResult = (end - start).toFixed(2);
                console.log(`Latency for \x1B[38;2;19;185;39m${this.command[0].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${loggerResult} ms\x1B[0m`);
                return result;
            };
        }
    }
    /**
   * Execute the command using a client.
   */ async exec(client) {
        const { result, error } = await client.request({
            body: this.command,
            path: this.path,
            upstashSyncToken: client.upstashSyncToken,
            headers: this.headers,
            onMessage: this.onMessage,
            isStreaming: this.isStreaming,
            signal: this.signal
        });
        if (error) {
            throw new UpstashError(error);
        }
        if (result === void 0) {
            throw new TypeError("Request did not return a result");
        }
        return this.deserialize(result);
    }
};
// pkg/commands/hrandfield.ts
function deserialize(result) {
    if (result.length === 0) {
        return null;
    }
    const obj = {};
    for(let i = 0; i < result.length; i += 2){
        const key = result[i];
        const value = result[i + 1];
        try {
            obj[key] = JSON.parse(value);
        } catch  {
            obj[key] = value;
        }
    }
    return obj;
}
var HRandFieldCommand = class extends Command {
    constructor(cmd, opts){
        const command = [
            "hrandfield",
            cmd[0]
        ];
        if (typeof cmd[1] === "number") {
            command.push(cmd[1]);
        }
        if (cmd[2]) {
            command.push("WITHVALUES");
        }
        super(command, {
            // @ts-expect-error to silence compiler
            deserialize: cmd[2] ? (result)=>deserialize(result) : opts?.deserialize,
            ...opts
        });
    }
};
// pkg/commands/append.ts
var AppendCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "append",
            ...cmd
        ], opts);
    }
};
// pkg/commands/bitcount.ts
var BitCountCommand = class extends Command {
    constructor([key, start, end], opts){
        const command = [
            "bitcount",
            key
        ];
        if (typeof start === "number") {
            command.push(start);
        }
        if (typeof end === "number") {
            command.push(end);
        }
        super(command, opts);
    }
};
// pkg/commands/bitfield.ts
var BitFieldCommand = class {
    constructor(args, client, opts, execOperation = (command)=>command.exec(this.client)){
        this.client = client;
        this.opts = opts;
        this.execOperation = execOperation;
        this.command = [
            "bitfield",
            ...args
        ];
    }
    command;
    chain(...args) {
        this.command.push(...args);
        return this;
    }
    get(...args) {
        return this.chain("get", ...args);
    }
    set(...args) {
        return this.chain("set", ...args);
    }
    incrby(...args) {
        return this.chain("incrby", ...args);
    }
    overflow(overflow) {
        return this.chain("overflow", overflow);
    }
    exec() {
        const command = new Command(this.command, this.opts);
        return this.execOperation(command);
    }
};
// pkg/commands/bitop.ts
var BitOpCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "bitop",
            ...cmd
        ], opts);
    }
};
// pkg/commands/bitpos.ts
var BitPosCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "bitpos",
            ...cmd
        ], opts);
    }
};
// pkg/commands/copy.ts
var CopyCommand = class extends Command {
    constructor([key, destinationKey, opts], commandOptions){
        super([
            "COPY",
            key,
            destinationKey,
            ...opts?.replace ? [
                "REPLACE"
            ] : []
        ], {
            ...commandOptions,
            deserialize (result) {
                if (result > 0) {
                    return "COPIED";
                }
                return "NOT_COPIED";
            }
        });
    }
};
// pkg/commands/dbsize.ts
var DBSizeCommand = class extends Command {
    constructor(opts){
        super([
            "dbsize"
        ], opts);
    }
};
// pkg/commands/decr.ts
var DecrCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "decr",
            ...cmd
        ], opts);
    }
};
// pkg/commands/decrby.ts
var DecrByCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "decrby",
            ...cmd
        ], opts);
    }
};
// pkg/commands/del.ts
var DelCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "del",
            ...cmd
        ], opts);
    }
};
// pkg/commands/echo.ts
var EchoCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "echo",
            ...cmd
        ], opts);
    }
};
// pkg/commands/evalRo.ts
var EvalROCommand = class extends Command {
    constructor([script, keys, args], opts){
        super([
            "eval_ro",
            script,
            keys.length,
            ...keys,
            ...args ?? []
        ], opts);
    }
};
// pkg/commands/eval.ts
var EvalCommand = class extends Command {
    constructor([script, keys, args], opts){
        super([
            "eval",
            script,
            keys.length,
            ...keys,
            ...args ?? []
        ], opts);
    }
};
// pkg/commands/evalshaRo.ts
var EvalshaROCommand = class extends Command {
    constructor([sha, keys, args], opts){
        super([
            "evalsha_ro",
            sha,
            keys.length,
            ...keys,
            ...args ?? []
        ], opts);
    }
};
// pkg/commands/evalsha.ts
var EvalshaCommand = class extends Command {
    constructor([sha, keys, args], opts){
        super([
            "evalsha",
            sha,
            keys.length,
            ...keys,
            ...args ?? []
        ], opts);
    }
};
// pkg/commands/exec.ts
var ExecCommand = class extends Command {
    constructor(cmd, opts){
        const normalizedCmd = cmd.map((arg)=>typeof arg === "string" ? arg : String(arg));
        super(normalizedCmd, opts);
    }
};
// pkg/commands/exists.ts
var ExistsCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "exists",
            ...cmd
        ], opts);
    }
};
// pkg/commands/expire.ts
var ExpireCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "expire",
            ...cmd.filter(Boolean)
        ], opts);
    }
};
// pkg/commands/expireat.ts
var ExpireAtCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "expireat",
            ...cmd
        ], opts);
    }
};
// pkg/commands/flushall.ts
var FlushAllCommand = class extends Command {
    constructor(args, opts){
        const command = [
            "flushall"
        ];
        if (args && args.length > 0 && args[0].async) {
            command.push("async");
        }
        super(command, opts);
    }
};
// pkg/commands/flushdb.ts
var FlushDBCommand = class extends Command {
    constructor([opts], cmdOpts){
        const command = [
            "flushdb"
        ];
        if (opts?.async) {
            command.push("async");
        }
        super(command, cmdOpts);
    }
};
// pkg/commands/geo_add.ts
var GeoAddCommand = class extends Command {
    constructor([key, arg1, ...arg2], opts){
        const command = [
            "geoadd",
            key
        ];
        if ("nx" in arg1 && arg1.nx) {
            command.push("nx");
        } else if ("xx" in arg1 && arg1.xx) {
            command.push("xx");
        }
        if ("ch" in arg1 && arg1.ch) {
            command.push("ch");
        }
        if ("latitude" in arg1 && arg1.latitude) {
            command.push(arg1.longitude, arg1.latitude, arg1.member);
        }
        command.push(...arg2.flatMap(({ latitude, longitude, member })=>[
                longitude,
                latitude,
                member
            ]));
        super(command, opts);
    }
};
// pkg/commands/geo_dist.ts
var GeoDistCommand = class extends Command {
    constructor([key, member1, member2, unit = "M"], opts){
        super([
            "GEODIST",
            key,
            member1,
            member2,
            unit
        ], opts);
    }
};
// pkg/commands/geo_hash.ts
var GeoHashCommand = class extends Command {
    constructor(cmd, opts){
        const [key] = cmd;
        const members = Array.isArray(cmd[1]) ? cmd[1] : cmd.slice(1);
        super([
            "GEOHASH",
            key,
            ...members
        ], opts);
    }
};
// pkg/commands/geo_pos.ts
var GeoPosCommand = class extends Command {
    constructor(cmd, opts){
        const [key] = cmd;
        const members = Array.isArray(cmd[1]) ? cmd[1] : cmd.slice(1);
        super([
            "GEOPOS",
            key,
            ...members
        ], {
            deserialize: (result)=>transform(result),
            ...opts
        });
    }
};
function transform(result) {
    const final = [];
    for (const pos of result){
        if (!pos?.[0] || !pos?.[1]) {
            continue;
        }
        final.push({
            lng: Number.parseFloat(pos[0]),
            lat: Number.parseFloat(pos[1])
        });
    }
    return final;
}
// pkg/commands/geo_search.ts
var GeoSearchCommand = class extends Command {
    constructor([key, centerPoint, shape, order, opts], commandOptions){
        const command = [
            "GEOSEARCH",
            key
        ];
        if (centerPoint.type === "FROMMEMBER" || centerPoint.type === "frommember") {
            command.push(centerPoint.type, centerPoint.member);
        }
        if (centerPoint.type === "FROMLONLAT" || centerPoint.type === "fromlonlat") {
            command.push(centerPoint.type, centerPoint.coordinate.lon, centerPoint.coordinate.lat);
        }
        if (shape.type === "BYRADIUS" || shape.type === "byradius") {
            command.push(shape.type, shape.radius, shape.radiusType);
        }
        if (shape.type === "BYBOX" || shape.type === "bybox") {
            command.push(shape.type, shape.rect.width, shape.rect.height, shape.rectType);
        }
        command.push(order);
        if (opts?.count) {
            command.push("COUNT", opts.count.limit, ...opts.count.any ? [
                "ANY"
            ] : []);
        }
        const transform2 = (result)=>{
            if (!opts?.withCoord && !opts?.withDist && !opts?.withHash) {
                return result.map((member)=>{
                    try {
                        return {
                            member: JSON.parse(member)
                        };
                    } catch  {
                        return {
                            member
                        };
                    }
                });
            }
            return result.map((members)=>{
                let counter = 1;
                const obj = {};
                try {
                    obj.member = JSON.parse(members[0]);
                } catch  {
                    obj.member = members[0];
                }
                if (opts.withDist) {
                    obj.dist = Number.parseFloat(members[counter++]);
                }
                if (opts.withHash) {
                    obj.hash = members[counter++].toString();
                }
                if (opts.withCoord) {
                    obj.coord = {
                        long: Number.parseFloat(members[counter][0]),
                        lat: Number.parseFloat(members[counter][1])
                    };
                }
                return obj;
            });
        };
        super([
            ...command,
            ...opts?.withCoord ? [
                "WITHCOORD"
            ] : [],
            ...opts?.withDist ? [
                "WITHDIST"
            ] : [],
            ...opts?.withHash ? [
                "WITHHASH"
            ] : []
        ], {
            deserialize: transform2,
            ...commandOptions
        });
    }
};
// pkg/commands/geo_search_store.ts
var GeoSearchStoreCommand = class extends Command {
    constructor([destination, key, centerPoint, shape, order, opts], commandOptions){
        const command = [
            "GEOSEARCHSTORE",
            destination,
            key
        ];
        if (centerPoint.type === "FROMMEMBER" || centerPoint.type === "frommember") {
            command.push(centerPoint.type, centerPoint.member);
        }
        if (centerPoint.type === "FROMLONLAT" || centerPoint.type === "fromlonlat") {
            command.push(centerPoint.type, centerPoint.coordinate.lon, centerPoint.coordinate.lat);
        }
        if (shape.type === "BYRADIUS" || shape.type === "byradius") {
            command.push(shape.type, shape.radius, shape.radiusType);
        }
        if (shape.type === "BYBOX" || shape.type === "bybox") {
            command.push(shape.type, shape.rect.width, shape.rect.height, shape.rectType);
        }
        command.push(order);
        if (opts?.count) {
            command.push("COUNT", opts.count.limit, ...opts.count.any ? [
                "ANY"
            ] : []);
        }
        super([
            ...command,
            ...opts?.storeDist ? [
                "STOREDIST"
            ] : []
        ], commandOptions);
    }
};
// pkg/commands/get.ts
var GetCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "get",
            ...cmd
        ], opts);
    }
};
// pkg/commands/getbit.ts
var GetBitCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "getbit",
            ...cmd
        ], opts);
    }
};
// pkg/commands/getdel.ts
var GetDelCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "getdel",
            ...cmd
        ], opts);
    }
};
// pkg/commands/getex.ts
var GetExCommand = class extends Command {
    constructor([key, opts], cmdOpts){
        const command = [
            "getex",
            key
        ];
        if (opts) {
            if ("ex" in opts && typeof opts.ex === "number") {
                command.push("ex", opts.ex);
            } else if ("px" in opts && typeof opts.px === "number") {
                command.push("px", opts.px);
            } else if ("exat" in opts && typeof opts.exat === "number") {
                command.push("exat", opts.exat);
            } else if ("pxat" in opts && typeof opts.pxat === "number") {
                command.push("pxat", opts.pxat);
            } else if ("persist" in opts && opts.persist) {
                command.push("persist");
            }
        }
        super(command, cmdOpts);
    }
};
// pkg/commands/getrange.ts
var GetRangeCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "getrange",
            ...cmd
        ], opts);
    }
};
// pkg/commands/getset.ts
var GetSetCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "getset",
            ...cmd
        ], opts);
    }
};
// pkg/commands/hdel.ts
var HDelCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hdel",
            ...cmd
        ], opts);
    }
};
// pkg/commands/hexists.ts
var HExistsCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hexists",
            ...cmd
        ], opts);
    }
};
// pkg/commands/hexpire.ts
var HExpireCommand = class extends Command {
    constructor(cmd, opts){
        const [key, fields, seconds, option] = cmd;
        const fieldArray = Array.isArray(fields) ? fields : [
            fields
        ];
        super([
            "hexpire",
            key,
            seconds,
            ...option ? [
                option
            ] : [],
            "FIELDS",
            fieldArray.length,
            ...fieldArray
        ], opts);
    }
};
// pkg/commands/hexpireat.ts
var HExpireAtCommand = class extends Command {
    constructor(cmd, opts){
        const [key, fields, timestamp, option] = cmd;
        const fieldArray = Array.isArray(fields) ? fields : [
            fields
        ];
        super([
            "hexpireat",
            key,
            timestamp,
            ...option ? [
                option
            ] : [],
            "FIELDS",
            fieldArray.length,
            ...fieldArray
        ], opts);
    }
};
// pkg/commands/hexpiretime.ts
var HExpireTimeCommand = class extends Command {
    constructor(cmd, opts){
        const [key, fields] = cmd;
        const fieldArray = Array.isArray(fields) ? fields : [
            fields
        ];
        super([
            "hexpiretime",
            key,
            "FIELDS",
            fieldArray.length,
            ...fieldArray
        ], opts);
    }
};
// pkg/commands/hpersist.ts
var HPersistCommand = class extends Command {
    constructor(cmd, opts){
        const [key, fields] = cmd;
        const fieldArray = Array.isArray(fields) ? fields : [
            fields
        ];
        super([
            "hpersist",
            key,
            "FIELDS",
            fieldArray.length,
            ...fieldArray
        ], opts);
    }
};
// pkg/commands/hpexpire.ts
var HPExpireCommand = class extends Command {
    constructor(cmd, opts){
        const [key, fields, milliseconds, option] = cmd;
        const fieldArray = Array.isArray(fields) ? fields : [
            fields
        ];
        super([
            "hpexpire",
            key,
            milliseconds,
            ...option ? [
                option
            ] : [],
            "FIELDS",
            fieldArray.length,
            ...fieldArray
        ], opts);
    }
};
// pkg/commands/hpexpireat.ts
var HPExpireAtCommand = class extends Command {
    constructor(cmd, opts){
        const [key, fields, timestamp, option] = cmd;
        const fieldArray = Array.isArray(fields) ? fields : [
            fields
        ];
        super([
            "hpexpireat",
            key,
            timestamp,
            ...option ? [
                option
            ] : [],
            "FIELDS",
            fieldArray.length,
            ...fieldArray
        ], opts);
    }
};
// pkg/commands/hpexpiretime.ts
var HPExpireTimeCommand = class extends Command {
    constructor(cmd, opts){
        const [key, fields] = cmd;
        const fieldArray = Array.isArray(fields) ? fields : [
            fields
        ];
        super([
            "hpexpiretime",
            key,
            "FIELDS",
            fieldArray.length,
            ...fieldArray
        ], opts);
    }
};
// pkg/commands/hpttl.ts
var HPTtlCommand = class extends Command {
    constructor(cmd, opts){
        const [key, fields] = cmd;
        const fieldArray = Array.isArray(fields) ? fields : [
            fields
        ];
        super([
            "hpttl",
            key,
            "FIELDS",
            fieldArray.length,
            ...fieldArray
        ], opts);
    }
};
// pkg/commands/hget.ts
var HGetCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hget",
            ...cmd
        ], opts);
    }
};
// pkg/commands/hgetall.ts
function deserialize2(result) {
    if (result.length === 0) {
        return null;
    }
    const obj = {};
    for(let i = 0; i < result.length; i += 2){
        const key = result[i];
        const value = result[i + 1];
        try {
            const valueIsNumberAndNotSafeInteger = !Number.isNaN(Number(value)) && !Number.isSafeInteger(Number(value));
            obj[key] = valueIsNumberAndNotSafeInteger ? value : JSON.parse(value);
        } catch  {
            obj[key] = value;
        }
    }
    return obj;
}
var HGetAllCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hgetall",
            ...cmd
        ], {
            deserialize: (result)=>deserialize2(result),
            ...opts
        });
    }
};
// pkg/commands/hincrby.ts
var HIncrByCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hincrby",
            ...cmd
        ], opts);
    }
};
// pkg/commands/hincrbyfloat.ts
var HIncrByFloatCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hincrbyfloat",
            ...cmd
        ], opts);
    }
};
// pkg/commands/hkeys.ts
var HKeysCommand = class extends Command {
    constructor([key], opts){
        super([
            "hkeys",
            key
        ], opts);
    }
};
// pkg/commands/hlen.ts
var HLenCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hlen",
            ...cmd
        ], opts);
    }
};
// pkg/commands/hmget.ts
function deserialize3(fields, result) {
    if (result.every((field)=>field === null)) {
        return null;
    }
    const obj = {};
    for (const [i, field] of fields.entries()){
        try {
            obj[field] = JSON.parse(result[i]);
        } catch  {
            obj[field] = result[i];
        }
    }
    return obj;
}
var HMGetCommand = class extends Command {
    constructor([key, ...fields], opts){
        super([
            "hmget",
            key,
            ...fields
        ], {
            deserialize: (result)=>deserialize3(fields, result),
            ...opts
        });
    }
};
// pkg/commands/hmset.ts
var HMSetCommand = class extends Command {
    constructor([key, kv], opts){
        super([
            "hmset",
            key,
            ...Object.entries(kv).flatMap(([field, value])=>[
                    field,
                    value
                ])
        ], opts);
    }
};
// pkg/commands/hscan.ts
var HScanCommand = class extends Command {
    constructor([key, cursor, cmdOpts], opts){
        const command = [
            "hscan",
            key,
            cursor
        ];
        if (cmdOpts?.match) {
            command.push("match", cmdOpts.match);
        }
        if (typeof cmdOpts?.count === "number") {
            command.push("count", cmdOpts.count);
        }
        super(command, {
            deserialize: deserializeScanResponse,
            ...opts
        });
    }
};
// pkg/commands/hset.ts
var HSetCommand = class extends Command {
    constructor([key, kv], opts){
        super([
            "hset",
            key,
            ...Object.entries(kv).flatMap(([field, value])=>[
                    field,
                    value
                ])
        ], opts);
    }
};
// pkg/commands/hsetnx.ts
var HSetNXCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hsetnx",
            ...cmd
        ], opts);
    }
};
// pkg/commands/hstrlen.ts
var HStrLenCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hstrlen",
            ...cmd
        ], opts);
    }
};
// pkg/commands/httl.ts
var HTtlCommand = class extends Command {
    constructor(cmd, opts){
        const [key, fields] = cmd;
        const fieldArray = Array.isArray(fields) ? fields : [
            fields
        ];
        super([
            "httl",
            key,
            "FIELDS",
            fieldArray.length,
            ...fieldArray
        ], opts);
    }
};
// pkg/commands/hvals.ts
var HValsCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "hvals",
            ...cmd
        ], opts);
    }
};
// pkg/commands/incr.ts
var IncrCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "incr",
            ...cmd
        ], opts);
    }
};
// pkg/commands/incrby.ts
var IncrByCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "incrby",
            ...cmd
        ], opts);
    }
};
// pkg/commands/incrbyfloat.ts
var IncrByFloatCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "incrbyfloat",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_arrappend.ts
var JsonArrAppendCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRAPPEND",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_arrindex.ts
var JsonArrIndexCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRINDEX",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_arrinsert.ts
var JsonArrInsertCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRINSERT",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_arrlen.ts
var JsonArrLenCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRLEN",
            cmd[0],
            cmd[1] ?? "$"
        ], opts);
    }
};
// pkg/commands/json_arrpop.ts
var JsonArrPopCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRPOP",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_arrtrim.ts
var JsonArrTrimCommand = class extends Command {
    constructor(cmd, opts){
        const path = cmd[1] ?? "$";
        const start = cmd[2] ?? 0;
        const stop = cmd[3] ?? 0;
        super([
            "JSON.ARRTRIM",
            cmd[0],
            path,
            start,
            stop
        ], opts);
    }
};
// pkg/commands/json_clear.ts
var JsonClearCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.CLEAR",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_del.ts
var JsonDelCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.DEL",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_forget.ts
var JsonForgetCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.FORGET",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_get.ts
var JsonGetCommand = class extends Command {
    constructor(cmd, opts){
        const command = [
            "JSON.GET"
        ];
        if (typeof cmd[1] === "string") {
            command.push(...cmd);
        } else {
            command.push(cmd[0]);
            if (cmd[1]) {
                if (cmd[1].indent) {
                    command.push("INDENT", cmd[1].indent);
                }
                if (cmd[1].newline) {
                    command.push("NEWLINE", cmd[1].newline);
                }
                if (cmd[1].space) {
                    command.push("SPACE", cmd[1].space);
                }
            }
            command.push(...cmd.slice(2));
        }
        super(command, opts);
    }
};
// pkg/commands/json_merge.ts
var JsonMergeCommand = class extends Command {
    constructor(cmd, opts){
        const command = [
            "JSON.MERGE",
            ...cmd
        ];
        super(command, opts);
    }
};
// pkg/commands/json_mget.ts
var JsonMGetCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.MGET",
            ...cmd[0],
            cmd[1]
        ], opts);
    }
};
// pkg/commands/json_mset.ts
var JsonMSetCommand = class extends Command {
    constructor(cmd, opts){
        const command = [
            "JSON.MSET"
        ];
        for (const c of cmd){
            command.push(c.key, c.path, c.value);
        }
        super(command, opts);
    }
};
// pkg/commands/json_numincrby.ts
var JsonNumIncrByCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.NUMINCRBY",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_nummultby.ts
var JsonNumMultByCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.NUMMULTBY",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_objkeys.ts
var JsonObjKeysCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.OBJKEYS",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_objlen.ts
var JsonObjLenCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.OBJLEN",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_resp.ts
var JsonRespCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.RESP",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_set.ts
var JsonSetCommand = class extends Command {
    constructor(cmd, opts){
        const command = [
            "JSON.SET",
            cmd[0],
            cmd[1],
            cmd[2]
        ];
        if (cmd[3]) {
            if (cmd[3].nx) {
                command.push("NX");
            } else if (cmd[3].xx) {
                command.push("XX");
            }
        }
        super(command, opts);
    }
};
// pkg/commands/json_strappend.ts
var JsonStrAppendCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.STRAPPEND",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_strlen.ts
var JsonStrLenCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.STRLEN",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_toggle.ts
var JsonToggleCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.TOGGLE",
            ...cmd
        ], opts);
    }
};
// pkg/commands/json_type.ts
var JsonTypeCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "JSON.TYPE",
            ...cmd
        ], opts);
    }
};
// pkg/commands/keys.ts
var KeysCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "keys",
            ...cmd
        ], opts);
    }
};
// pkg/commands/lindex.ts
var LIndexCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "lindex",
            ...cmd
        ], opts);
    }
};
// pkg/commands/linsert.ts
var LInsertCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "linsert",
            ...cmd
        ], opts);
    }
};
// pkg/commands/llen.ts
var LLenCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "llen",
            ...cmd
        ], opts);
    }
};
// pkg/commands/lmove.ts
var LMoveCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "lmove",
            ...cmd
        ], opts);
    }
};
// pkg/commands/lmpop.ts
var LmPopCommand = class extends Command {
    constructor(cmd, opts){
        const [numkeys, keys, direction, count] = cmd;
        super([
            "LMPOP",
            numkeys,
            ...keys,
            direction,
            ...count ? [
                "COUNT",
                count
            ] : []
        ], opts);
    }
};
// pkg/commands/lpop.ts
var LPopCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "lpop",
            ...cmd
        ], opts);
    }
};
// pkg/commands/lpos.ts
var LPosCommand = class extends Command {
    constructor(cmd, opts){
        const args = [
            "lpos",
            cmd[0],
            cmd[1]
        ];
        if (typeof cmd[2]?.rank === "number") {
            args.push("rank", cmd[2].rank);
        }
        if (typeof cmd[2]?.count === "number") {
            args.push("count", cmd[2].count);
        }
        if (typeof cmd[2]?.maxLen === "number") {
            args.push("maxLen", cmd[2].maxLen);
        }
        super(args, opts);
    }
};
// pkg/commands/lpush.ts
var LPushCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "lpush",
            ...cmd
        ], opts);
    }
};
// pkg/commands/lpushx.ts
var LPushXCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "lpushx",
            ...cmd
        ], opts);
    }
};
// pkg/commands/lrange.ts
var LRangeCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "lrange",
            ...cmd
        ], opts);
    }
};
// pkg/commands/lrem.ts
var LRemCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "lrem",
            ...cmd
        ], opts);
    }
};
// pkg/commands/lset.ts
var LSetCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "lset",
            ...cmd
        ], opts);
    }
};
// pkg/commands/ltrim.ts
var LTrimCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "ltrim",
            ...cmd
        ], opts);
    }
};
// pkg/commands/mget.ts
var MGetCommand = class extends Command {
    constructor(cmd, opts){
        const keys = Array.isArray(cmd[0]) ? cmd[0] : cmd;
        super([
            "mget",
            ...keys
        ], opts);
    }
};
// pkg/commands/mset.ts
var MSetCommand = class extends Command {
    constructor([kv], opts){
        super([
            "mset",
            ...Object.entries(kv).flatMap(([key, value])=>[
                    key,
                    value
                ])
        ], opts);
    }
};
// pkg/commands/msetnx.ts
var MSetNXCommand = class extends Command {
    constructor([kv], opts){
        super([
            "msetnx",
            ...Object.entries(kv).flat()
        ], opts);
    }
};
// pkg/commands/persist.ts
var PersistCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "persist",
            ...cmd
        ], opts);
    }
};
// pkg/commands/pexpire.ts
var PExpireCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "pexpire",
            ...cmd
        ], opts);
    }
};
// pkg/commands/pexpireat.ts
var PExpireAtCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "pexpireat",
            ...cmd
        ], opts);
    }
};
// pkg/commands/pfadd.ts
var PfAddCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "pfadd",
            ...cmd
        ], opts);
    }
};
// pkg/commands/pfcount.ts
var PfCountCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "pfcount",
            ...cmd
        ], opts);
    }
};
// pkg/commands/pfmerge.ts
var PfMergeCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "pfmerge",
            ...cmd
        ], opts);
    }
};
// pkg/commands/ping.ts
var PingCommand = class extends Command {
    constructor(cmd, opts){
        const command = [
            "ping"
        ];
        if (cmd?.[0] !== void 0) {
            command.push(cmd[0]);
        }
        super(command, opts);
    }
};
// pkg/commands/psetex.ts
var PSetEXCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "psetex",
            ...cmd
        ], opts);
    }
};
// pkg/commands/pttl.ts
var PTtlCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "pttl",
            ...cmd
        ], opts);
    }
};
// pkg/commands/publish.ts
var PublishCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "publish",
            ...cmd
        ], opts);
    }
};
// pkg/commands/randomkey.ts
var RandomKeyCommand = class extends Command {
    constructor(opts){
        super([
            "randomkey"
        ], opts);
    }
};
// pkg/commands/rename.ts
var RenameCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "rename",
            ...cmd
        ], opts);
    }
};
// pkg/commands/renamenx.ts
var RenameNXCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "renamenx",
            ...cmd
        ], opts);
    }
};
// pkg/commands/rpop.ts
var RPopCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "rpop",
            ...cmd
        ], opts);
    }
};
// pkg/commands/rpush.ts
var RPushCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "rpush",
            ...cmd
        ], opts);
    }
};
// pkg/commands/rpushx.ts
var RPushXCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "rpushx",
            ...cmd
        ], opts);
    }
};
// pkg/commands/sadd.ts
var SAddCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "sadd",
            ...cmd
        ], opts);
    }
};
// pkg/commands/scan.ts
var ScanCommand = class extends Command {
    constructor([cursor, opts], cmdOpts){
        const command = [
            "scan",
            cursor
        ];
        if (opts?.match) {
            command.push("match", opts.match);
        }
        if (typeof opts?.count === "number") {
            command.push("count", opts.count);
        }
        if (opts && "withType" in opts && opts.withType === true) {
            command.push("withtype");
        } else if (opts && "type" in opts && opts.type && opts.type.length > 0) {
            command.push("type", opts.type);
        }
        super(command, {
            // @ts-expect-error ignore types here
            deserialize: opts?.withType ? deserializeScanWithTypesResponse : deserializeScanResponse,
            ...cmdOpts
        });
    }
};
// pkg/commands/scard.ts
var SCardCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "scard",
            ...cmd
        ], opts);
    }
};
// pkg/commands/script_exists.ts
var ScriptExistsCommand = class extends Command {
    constructor(hashes, opts){
        super([
            "script",
            "exists",
            ...hashes
        ], {
            deserialize: (result)=>result,
            ...opts
        });
    }
};
// pkg/commands/script_flush.ts
var ScriptFlushCommand = class extends Command {
    constructor([opts], cmdOpts){
        const cmd = [
            "script",
            "flush"
        ];
        if (opts?.sync) {
            cmd.push("sync");
        } else if (opts?.async) {
            cmd.push("async");
        }
        super(cmd, cmdOpts);
    }
};
// pkg/commands/script_load.ts
var ScriptLoadCommand = class extends Command {
    constructor(args, opts){
        super([
            "script",
            "load",
            ...args
        ], opts);
    }
};
// pkg/commands/sdiff.ts
var SDiffCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "sdiff",
            ...cmd
        ], opts);
    }
};
// pkg/commands/sdiffstore.ts
var SDiffStoreCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "sdiffstore",
            ...cmd
        ], opts);
    }
};
// pkg/commands/set.ts
var SetCommand = class extends Command {
    constructor([key, value, opts], cmdOpts){
        const command = [
            "set",
            key,
            value
        ];
        if (opts) {
            if ("nx" in opts && opts.nx) {
                command.push("nx");
            } else if ("xx" in opts && opts.xx) {
                command.push("xx");
            }
            if ("get" in opts && opts.get) {
                command.push("get");
            }
            if ("ex" in opts && typeof opts.ex === "number") {
                command.push("ex", opts.ex);
            } else if ("px" in opts && typeof opts.px === "number") {
                command.push("px", opts.px);
            } else if ("exat" in opts && typeof opts.exat === "number") {
                command.push("exat", opts.exat);
            } else if ("pxat" in opts && typeof opts.pxat === "number") {
                command.push("pxat", opts.pxat);
            } else if ("keepTtl" in opts && opts.keepTtl) {
                command.push("keepTtl");
            }
        }
        super(command, cmdOpts);
    }
};
// pkg/commands/setbit.ts
var SetBitCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "setbit",
            ...cmd
        ], opts);
    }
};
// pkg/commands/setex.ts
var SetExCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "setex",
            ...cmd
        ], opts);
    }
};
// pkg/commands/setnx.ts
var SetNxCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "setnx",
            ...cmd
        ], opts);
    }
};
// pkg/commands/setrange.ts
var SetRangeCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "setrange",
            ...cmd
        ], opts);
    }
};
// pkg/commands/sinter.ts
var SInterCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "sinter",
            ...cmd
        ], opts);
    }
};
// pkg/commands/sinterstore.ts
var SInterStoreCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "sinterstore",
            ...cmd
        ], opts);
    }
};
// pkg/commands/sismember.ts
var SIsMemberCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "sismember",
            ...cmd
        ], opts);
    }
};
// pkg/commands/smembers.ts
var SMembersCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "smembers",
            ...cmd
        ], opts);
    }
};
// pkg/commands/smismember.ts
var SMIsMemberCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "smismember",
            cmd[0],
            ...cmd[1]
        ], opts);
    }
};
// pkg/commands/smove.ts
var SMoveCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "smove",
            ...cmd
        ], opts);
    }
};
// pkg/commands/spop.ts
var SPopCommand = class extends Command {
    constructor([key, count], opts){
        const command = [
            "spop",
            key
        ];
        if (typeof count === "number") {
            command.push(count);
        }
        super(command, opts);
    }
};
// pkg/commands/srandmember.ts
var SRandMemberCommand = class extends Command {
    constructor([key, count], opts){
        const command = [
            "srandmember",
            key
        ];
        if (typeof count === "number") {
            command.push(count);
        }
        super(command, opts);
    }
};
// pkg/commands/srem.ts
var SRemCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "srem",
            ...cmd
        ], opts);
    }
};
// pkg/commands/sscan.ts
var SScanCommand = class extends Command {
    constructor([key, cursor, opts], cmdOpts){
        const command = [
            "sscan",
            key,
            cursor
        ];
        if (opts?.match) {
            command.push("match", opts.match);
        }
        if (typeof opts?.count === "number") {
            command.push("count", opts.count);
        }
        super(command, {
            deserialize: deserializeScanResponse,
            ...cmdOpts
        });
    }
};
// pkg/commands/strlen.ts
var StrLenCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "strlen",
            ...cmd
        ], opts);
    }
};
// pkg/commands/sunion.ts
var SUnionCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "sunion",
            ...cmd
        ], opts);
    }
};
// pkg/commands/sunionstore.ts
var SUnionStoreCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "sunionstore",
            ...cmd
        ], opts);
    }
};
// pkg/commands/time.ts
var TimeCommand = class extends Command {
    constructor(opts){
        super([
            "time"
        ], opts);
    }
};
// pkg/commands/touch.ts
var TouchCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "touch",
            ...cmd
        ], opts);
    }
};
// pkg/commands/ttl.ts
var TtlCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "ttl",
            ...cmd
        ], opts);
    }
};
// pkg/commands/type.ts
var TypeCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "type",
            ...cmd
        ], opts);
    }
};
// pkg/commands/unlink.ts
var UnlinkCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "unlink",
            ...cmd
        ], opts);
    }
};
// pkg/commands/xack.ts
var XAckCommand = class extends Command {
    constructor([key, group, id], opts){
        const ids = Array.isArray(id) ? [
            ...id
        ] : [
            id
        ];
        super([
            "XACK",
            key,
            group,
            ...ids
        ], opts);
    }
};
// pkg/commands/xadd.ts
var XAddCommand = class extends Command {
    constructor([key, id, entries, opts], commandOptions){
        const command = [
            "XADD",
            key
        ];
        if (opts) {
            if (opts.nomkStream) {
                command.push("NOMKSTREAM");
            }
            if (opts.trim) {
                command.push(opts.trim.type, opts.trim.comparison, opts.trim.threshold);
                if (opts.trim.limit !== void 0) {
                    command.push("LIMIT", opts.trim.limit);
                }
            }
        }
        command.push(id);
        for (const [k, v] of Object.entries(entries)){
            command.push(k, v);
        }
        super(command, commandOptions);
    }
};
// pkg/commands/xautoclaim.ts
var XAutoClaim = class extends Command {
    constructor([key, group, consumer, minIdleTime, start, options], opts){
        const commands = [];
        if (options?.count) {
            commands.push("COUNT", options.count);
        }
        if (options?.justId) {
            commands.push("JUSTID");
        }
        super([
            "XAUTOCLAIM",
            key,
            group,
            consumer,
            minIdleTime,
            start,
            ...commands
        ], opts);
    }
};
// pkg/commands/xclaim.ts
var XClaimCommand = class extends Command {
    constructor([key, group, consumer, minIdleTime, id, options], opts){
        const ids = Array.isArray(id) ? [
            ...id
        ] : [
            id
        ];
        const commands = [];
        if (options?.idleMS) {
            commands.push("IDLE", options.idleMS);
        }
        if (options?.idleMS) {
            commands.push("TIME", options.timeMS);
        }
        if (options?.retryCount) {
            commands.push("RETRYCOUNT", options.retryCount);
        }
        if (options?.force) {
            commands.push("FORCE");
        }
        if (options?.justId) {
            commands.push("JUSTID");
        }
        if (options?.lastId) {
            commands.push("LASTID", options.lastId);
        }
        super([
            "XCLAIM",
            key,
            group,
            consumer,
            minIdleTime,
            ...ids,
            ...commands
        ], opts);
    }
};
// pkg/commands/xdel.ts
var XDelCommand = class extends Command {
    constructor([key, ids], opts){
        const cmds = Array.isArray(ids) ? [
            ...ids
        ] : [
            ids
        ];
        super([
            "XDEL",
            key,
            ...cmds
        ], opts);
    }
};
// pkg/commands/xgroup.ts
var XGroupCommand = class extends Command {
    constructor([key, opts], commandOptions){
        const command = [
            "XGROUP"
        ];
        switch(opts.type){
            case "CREATE":
                {
                    command.push("CREATE", key, opts.group, opts.id);
                    if (opts.options) {
                        if (opts.options.MKSTREAM) {
                            command.push("MKSTREAM");
                        }
                        if (opts.options.ENTRIESREAD !== void 0) {
                            command.push("ENTRIESREAD", opts.options.ENTRIESREAD.toString());
                        }
                    }
                    break;
                }
            case "CREATECONSUMER":
                {
                    command.push("CREATECONSUMER", key, opts.group, opts.consumer);
                    break;
                }
            case "DELCONSUMER":
                {
                    command.push("DELCONSUMER", key, opts.group, opts.consumer);
                    break;
                }
            case "DESTROY":
                {
                    command.push("DESTROY", key, opts.group);
                    break;
                }
            case "SETID":
                {
                    command.push("SETID", key, opts.group, opts.id);
                    if (opts.options?.ENTRIESREAD !== void 0) {
                        command.push("ENTRIESREAD", opts.options.ENTRIESREAD.toString());
                    }
                    break;
                }
            default:
                {
                    throw new Error("Invalid XGROUP");
                }
        }
        super(command, commandOptions);
    }
};
// pkg/commands/xinfo.ts
var XInfoCommand = class extends Command {
    constructor([key, options], opts){
        const cmds = [];
        if (options.type === "CONSUMERS") {
            cmds.push("CONSUMERS", key, options.group);
        } else {
            cmds.push("GROUPS", key);
        }
        super([
            "XINFO",
            ...cmds
        ], opts);
    }
};
// pkg/commands/xlen.ts
var XLenCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "XLEN",
            ...cmd
        ], opts);
    }
};
// pkg/commands/xpending.ts
var XPendingCommand = class extends Command {
    constructor([key, group, start, end, count, options], opts){
        const consumers = options?.consumer === void 0 ? [] : Array.isArray(options.consumer) ? [
            ...options.consumer
        ] : [
            options.consumer
        ];
        super([
            "XPENDING",
            key,
            group,
            ...options?.idleTime ? [
                "IDLE",
                options.idleTime
            ] : [],
            start,
            end,
            count,
            ...consumers
        ], opts);
    }
};
// pkg/commands/xrange.ts
function deserialize4(result) {
    const obj = {};
    for (const e of result){
        for(let i = 0; i < e.length; i += 2){
            const streamId = e[i];
            const entries = e[i + 1];
            if (!(streamId in obj)) {
                obj[streamId] = {};
            }
            for(let j = 0; j < entries.length; j += 2){
                const field = entries[j];
                const value = entries[j + 1];
                try {
                    obj[streamId][field] = JSON.parse(value);
                } catch  {
                    obj[streamId][field] = value;
                }
            }
        }
    }
    return obj;
}
var XRangeCommand = class extends Command {
    constructor([key, start, end, count], opts){
        const command = [
            "XRANGE",
            key,
            start,
            end
        ];
        if (typeof count === "number") {
            command.push("COUNT", count);
        }
        super(command, {
            deserialize: (result)=>deserialize4(result),
            ...opts
        });
    }
};
// pkg/commands/xread.ts
var UNBALANCED_XREAD_ERR = "ERR Unbalanced XREAD list of streams: for each stream key an ID or '$' must be specified";
var XReadCommand = class extends Command {
    constructor([key, id, options], opts){
        if (Array.isArray(key) && Array.isArray(id) && key.length !== id.length) {
            throw new Error(UNBALANCED_XREAD_ERR);
        }
        const commands = [];
        if (typeof options?.count === "number") {
            commands.push("COUNT", options.count);
        }
        if (typeof options?.blockMS === "number") {
            commands.push("BLOCK", options.blockMS);
        }
        commands.push("STREAMS", ...Array.isArray(key) ? [
            ...key
        ] : [
            key
        ], ...Array.isArray(id) ? [
            ...id
        ] : [
            id
        ]);
        super([
            "XREAD",
            ...commands
        ], opts);
    }
};
// pkg/commands/xreadgroup.ts
var UNBALANCED_XREADGROUP_ERR = "ERR Unbalanced XREADGROUP list of streams: for each stream key an ID or '$' must be specified";
var XReadGroupCommand = class extends Command {
    constructor([group, consumer, key, id, options], opts){
        if (Array.isArray(key) && Array.isArray(id) && key.length !== id.length) {
            throw new Error(UNBALANCED_XREADGROUP_ERR);
        }
        const commands = [];
        if (typeof options?.count === "number") {
            commands.push("COUNT", options.count);
        }
        if (typeof options?.blockMS === "number") {
            commands.push("BLOCK", options.blockMS);
        }
        if (typeof options?.NOACK === "boolean" && options.NOACK) {
            commands.push("NOACK");
        }
        commands.push("STREAMS", ...Array.isArray(key) ? [
            ...key
        ] : [
            key
        ], ...Array.isArray(id) ? [
            ...id
        ] : [
            id
        ]);
        super([
            "XREADGROUP",
            "GROUP",
            group,
            consumer,
            ...commands
        ], opts);
    }
};
// pkg/commands/xrevrange.ts
var XRevRangeCommand = class extends Command {
    constructor([key, end, start, count], opts){
        const command = [
            "XREVRANGE",
            key,
            end,
            start
        ];
        if (typeof count === "number") {
            command.push("COUNT", count);
        }
        super(command, {
            deserialize: (result)=>deserialize5(result),
            ...opts
        });
    }
};
function deserialize5(result) {
    const obj = {};
    for (const e of result){
        for(let i = 0; i < e.length; i += 2){
            const streamId = e[i];
            const entries = e[i + 1];
            if (!(streamId in obj)) {
                obj[streamId] = {};
            }
            for(let j = 0; j < entries.length; j += 2){
                const field = entries[j];
                const value = entries[j + 1];
                try {
                    obj[streamId][field] = JSON.parse(value);
                } catch  {
                    obj[streamId][field] = value;
                }
            }
        }
    }
    return obj;
}
// pkg/commands/xtrim.ts
var XTrimCommand = class extends Command {
    constructor([key, options], opts){
        const { limit, strategy, threshold, exactness = "~" } = options;
        super([
            "XTRIM",
            key,
            strategy,
            exactness,
            threshold,
            ...limit ? [
                "LIMIT",
                limit
            ] : []
        ], opts);
    }
};
// pkg/commands/zadd.ts
var ZAddCommand = class extends Command {
    constructor([key, arg1, ...arg2], opts){
        const command = [
            "zadd",
            key
        ];
        if ("nx" in arg1 && arg1.nx) {
            command.push("nx");
        } else if ("xx" in arg1 && arg1.xx) {
            command.push("xx");
        }
        if ("ch" in arg1 && arg1.ch) {
            command.push("ch");
        }
        if ("incr" in arg1 && arg1.incr) {
            command.push("incr");
        }
        if ("lt" in arg1 && arg1.lt) {
            command.push("lt");
        } else if ("gt" in arg1 && arg1.gt) {
            command.push("gt");
        }
        if ("score" in arg1 && "member" in arg1) {
            command.push(arg1.score, arg1.member);
        }
        command.push(...arg2.flatMap(({ score, member })=>[
                score,
                member
            ]));
        super(command, opts);
    }
};
// pkg/commands/zcard.ts
var ZCardCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zcard",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zcount.ts
var ZCountCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zcount",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zincrby.ts
var ZIncrByCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zincrby",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zinterstore.ts
var ZInterStoreCommand = class extends Command {
    constructor([destination, numKeys, keyOrKeys, opts], cmdOpts){
        const command = [
            "zinterstore",
            destination,
            numKeys
        ];
        if (Array.isArray(keyOrKeys)) {
            command.push(...keyOrKeys);
        } else {
            command.push(keyOrKeys);
        }
        if (opts) {
            if ("weights" in opts && opts.weights) {
                command.push("weights", ...opts.weights);
            } else if ("weight" in opts && typeof opts.weight === "number") {
                command.push("weights", opts.weight);
            }
            if ("aggregate" in opts) {
                command.push("aggregate", opts.aggregate);
            }
        }
        super(command, cmdOpts);
    }
};
// pkg/commands/zlexcount.ts
var ZLexCountCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zlexcount",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zpopmax.ts
var ZPopMaxCommand = class extends Command {
    constructor([key, count], opts){
        const command = [
            "zpopmax",
            key
        ];
        if (typeof count === "number") {
            command.push(count);
        }
        super(command, opts);
    }
};
// pkg/commands/zpopmin.ts
var ZPopMinCommand = class extends Command {
    constructor([key, count], opts){
        const command = [
            "zpopmin",
            key
        ];
        if (typeof count === "number") {
            command.push(count);
        }
        super(command, opts);
    }
};
// pkg/commands/zrange.ts
var ZRangeCommand = class extends Command {
    constructor([key, min, max, opts], cmdOpts){
        const command = [
            "zrange",
            key,
            min,
            max
        ];
        if (opts?.byScore) {
            command.push("byscore");
        }
        if (opts?.byLex) {
            command.push("bylex");
        }
        if (opts?.rev) {
            command.push("rev");
        }
        if (opts?.count !== void 0 && opts.offset !== void 0) {
            command.push("limit", opts.offset, opts.count);
        }
        if (opts?.withScores) {
            command.push("withscores");
        }
        super(command, cmdOpts);
    }
};
// pkg/commands/zrank.ts
var ZRankCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zrank",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zrem.ts
var ZRemCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zrem",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zremrangebylex.ts
var ZRemRangeByLexCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zremrangebylex",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zremrangebyrank.ts
var ZRemRangeByRankCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zremrangebyrank",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zremrangebyscore.ts
var ZRemRangeByScoreCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zremrangebyscore",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zrevrank.ts
var ZRevRankCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zrevrank",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zscan.ts
var ZScanCommand = class extends Command {
    constructor([key, cursor, opts], cmdOpts){
        const command = [
            "zscan",
            key,
            cursor
        ];
        if (opts?.match) {
            command.push("match", opts.match);
        }
        if (typeof opts?.count === "number") {
            command.push("count", opts.count);
        }
        super(command, {
            deserialize: deserializeScanResponse,
            ...cmdOpts
        });
    }
};
// pkg/commands/zscore.ts
var ZScoreCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zscore",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zunion.ts
var ZUnionCommand = class extends Command {
    constructor([numKeys, keyOrKeys, opts], cmdOpts){
        const command = [
            "zunion",
            numKeys
        ];
        if (Array.isArray(keyOrKeys)) {
            command.push(...keyOrKeys);
        } else {
            command.push(keyOrKeys);
        }
        if (opts) {
            if ("weights" in opts && opts.weights) {
                command.push("weights", ...opts.weights);
            } else if ("weight" in opts && typeof opts.weight === "number") {
                command.push("weights", opts.weight);
            }
            if ("aggregate" in opts) {
                command.push("aggregate", opts.aggregate);
            }
            if (opts.withScores) {
                command.push("withscores");
            }
        }
        super(command, cmdOpts);
    }
};
// pkg/commands/zunionstore.ts
var ZUnionStoreCommand = class extends Command {
    constructor([destination, numKeys, keyOrKeys, opts], cmdOpts){
        const command = [
            "zunionstore",
            destination,
            numKeys
        ];
        if (Array.isArray(keyOrKeys)) {
            command.push(...keyOrKeys);
        } else {
            command.push(keyOrKeys);
        }
        if (opts) {
            if ("weights" in opts && opts.weights) {
                command.push("weights", ...opts.weights);
            } else if ("weight" in opts && typeof opts.weight === "number") {
                command.push("weights", opts.weight);
            }
            if ("aggregate" in opts) {
                command.push("aggregate", opts.aggregate);
            }
        }
        super(command, cmdOpts);
    }
};
// pkg/commands/zdiffstore.ts
var ZDiffStoreCommand = class extends Command {
    constructor(cmd, opts){
        super([
            "zdiffstore",
            ...cmd
        ], opts);
    }
};
// pkg/commands/zmscore.ts
var ZMScoreCommand = class extends Command {
    constructor(cmd, opts){
        const [key, members] = cmd;
        super([
            "zmscore",
            key,
            ...members
        ], opts);
    }
};
// pkg/pipeline.ts
var Pipeline = class {
    client;
    commands;
    commandOptions;
    multiExec;
    constructor(opts){
        this.client = opts.client;
        this.commands = [];
        this.commandOptions = opts.commandOptions;
        this.multiExec = opts.multiExec ?? false;
        if (this.commandOptions?.latencyLogging) {
            const originalExec = this.exec.bind(this);
            this.exec = async (options)=>{
                const start = performance.now();
                const result = await (options ? originalExec(options) : originalExec());
                const end = performance.now();
                const loggerResult = (end - start).toFixed(2);
                console.log(`Latency for \x1B[38;2;19;185;39m${this.multiExec ? [
                    "MULTI-EXEC"
                ] : [
                    "PIPELINE"
                ].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${loggerResult} ms\x1B[0m`);
                return result;
            };
        }
    }
    exec = async (options)=>{
        if (this.commands.length === 0) {
            throw new Error("Pipeline is empty");
        }
        const path = this.multiExec ? [
            "multi-exec"
        ] : [
            "pipeline"
        ];
        const res = await this.client.request({
            path,
            body: Object.values(this.commands).map((c)=>c.command)
        });
        return options?.keepErrors ? res.map(({ error, result }, i)=>{
            return {
                error,
                result: this.commands[i].deserialize(result)
            };
        }) : res.map(({ error, result }, i)=>{
            if (error) {
                throw new UpstashError(`Command ${i + 1} [ ${this.commands[i].command[0]} ] failed: ${error}`);
            }
            return this.commands[i].deserialize(result);
        });
    };
    /**
   * Returns the length of pipeline before the execution
   */ length() {
        return this.commands.length;
    }
    /**
   * Pushes a command into the pipeline and returns a chainable instance of the
   * pipeline
   */ chain(command) {
        this.commands.push(command);
        return this;
    }
    /**
   * @see https://redis.io/commands/append
   */ append = (...args)=>this.chain(new AppendCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/bitcount
   */ bitcount = (...args)=>this.chain(new BitCountCommand(args, this.commandOptions));
    /**
   * Returns an instance that can be used to execute `BITFIELD` commands on one key.
   *
   * @example
   * ```typescript
   * redis.set("mykey", 0);
   * const result = await redis.pipeline()
   *   .bitfield("mykey")
   *   .set("u4", 0, 16)
   *   .incr("u4", "#1", 1)
   *   .exec();
   * console.log(result); // [[0, 1]]
   * ```
   *
   * @see https://redis.io/commands/bitfield
   */ bitfield = (...args)=>new BitFieldCommand(args, this.client, this.commandOptions, this.chain.bind(this));
    /**
   * @see https://redis.io/commands/bitop
   */ bitop = (op, destinationKey, sourceKey, ...sourceKeys)=>this.chain(new BitOpCommand([
            op,
            destinationKey,
            sourceKey,
            ...sourceKeys
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/bitpos
   */ bitpos = (...args)=>this.chain(new BitPosCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/copy
   */ copy = (...args)=>this.chain(new CopyCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zdiffstore
   */ zdiffstore = (...args)=>this.chain(new ZDiffStoreCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/dbsize
   */ dbsize = ()=>this.chain(new DBSizeCommand(this.commandOptions));
    /**
   * @see https://redis.io/commands/decr
   */ decr = (...args)=>this.chain(new DecrCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/decrby
   */ decrby = (...args)=>this.chain(new DecrByCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/del
   */ del = (...args)=>this.chain(new DelCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/echo
   */ echo = (...args)=>this.chain(new EchoCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/eval_ro
   */ evalRo = (...args)=>this.chain(new EvalROCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/eval
   */ eval = (...args)=>this.chain(new EvalCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/evalsha_ro
   */ evalshaRo = (...args)=>this.chain(new EvalshaROCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/evalsha
   */ evalsha = (...args)=>this.chain(new EvalshaCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/exists
   */ exists = (...args)=>this.chain(new ExistsCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/expire
   */ expire = (...args)=>this.chain(new ExpireCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/expireat
   */ expireat = (...args)=>this.chain(new ExpireAtCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/flushall
   */ flushall = (args)=>this.chain(new FlushAllCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/flushdb
   */ flushdb = (...args)=>this.chain(new FlushDBCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/geoadd
   */ geoadd = (...args)=>this.chain(new GeoAddCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/geodist
   */ geodist = (...args)=>this.chain(new GeoDistCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/geopos
   */ geopos = (...args)=>this.chain(new GeoPosCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/geohash
   */ geohash = (...args)=>this.chain(new GeoHashCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/geosearch
   */ geosearch = (...args)=>this.chain(new GeoSearchCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/geosearchstore
   */ geosearchstore = (...args)=>this.chain(new GeoSearchStoreCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/get
   */ get = (...args)=>this.chain(new GetCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/getbit
   */ getbit = (...args)=>this.chain(new GetBitCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/getdel
   */ getdel = (...args)=>this.chain(new GetDelCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/getex
   */ getex = (...args)=>this.chain(new GetExCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/getrange
   */ getrange = (...args)=>this.chain(new GetRangeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/getset
   */ getset = (key, value)=>this.chain(new GetSetCommand([
            key,
            value
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/hdel
   */ hdel = (...args)=>this.chain(new HDelCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hexists
   */ hexists = (...args)=>this.chain(new HExistsCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hexpire
   */ hexpire = (...args)=>this.chain(new HExpireCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hexpireat
   */ hexpireat = (...args)=>this.chain(new HExpireAtCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hexpiretime
   */ hexpiretime = (...args)=>this.chain(new HExpireTimeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/httl
   */ httl = (...args)=>this.chain(new HTtlCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hpexpire
   */ hpexpire = (...args)=>this.chain(new HPExpireCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hpexpireat
   */ hpexpireat = (...args)=>this.chain(new HPExpireAtCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hpexpiretime
   */ hpexpiretime = (...args)=>this.chain(new HPExpireTimeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hpttl
   */ hpttl = (...args)=>this.chain(new HPTtlCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hpersist
   */ hpersist = (...args)=>this.chain(new HPersistCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hget
   */ hget = (...args)=>this.chain(new HGetCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hgetall
   */ hgetall = (...args)=>this.chain(new HGetAllCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hincrby
   */ hincrby = (...args)=>this.chain(new HIncrByCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hincrbyfloat
   */ hincrbyfloat = (...args)=>this.chain(new HIncrByFloatCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hkeys
   */ hkeys = (...args)=>this.chain(new HKeysCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hlen
   */ hlen = (...args)=>this.chain(new HLenCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hmget
   */ hmget = (...args)=>this.chain(new HMGetCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hmset
   */ hmset = (key, kv)=>this.chain(new HMSetCommand([
            key,
            kv
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/hrandfield
   */ hrandfield = (key, count, withValues)=>this.chain(new HRandFieldCommand([
            key,
            count,
            withValues
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/hscan
   */ hscan = (...args)=>this.chain(new HScanCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hset
   */ hset = (key, kv)=>this.chain(new HSetCommand([
            key,
            kv
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/hsetnx
   */ hsetnx = (key, field, value)=>this.chain(new HSetNXCommand([
            key,
            field,
            value
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/hstrlen
   */ hstrlen = (...args)=>this.chain(new HStrLenCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/hvals
   */ hvals = (...args)=>this.chain(new HValsCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/incr
   */ incr = (...args)=>this.chain(new IncrCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/incrby
   */ incrby = (...args)=>this.chain(new IncrByCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/incrbyfloat
   */ incrbyfloat = (...args)=>this.chain(new IncrByFloatCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/keys
   */ keys = (...args)=>this.chain(new KeysCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/lindex
   */ lindex = (...args)=>this.chain(new LIndexCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/linsert
   */ linsert = (key, direction, pivot, value)=>this.chain(new LInsertCommand([
            key,
            direction,
            pivot,
            value
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/llen
   */ llen = (...args)=>this.chain(new LLenCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/lmove
   */ lmove = (...args)=>this.chain(new LMoveCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/lpop
   */ lpop = (...args)=>this.chain(new LPopCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/lmpop
   */ lmpop = (...args)=>this.chain(new LmPopCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/lpos
   */ lpos = (...args)=>this.chain(new LPosCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/lpush
   */ lpush = (key, ...elements)=>this.chain(new LPushCommand([
            key,
            ...elements
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/lpushx
   */ lpushx = (key, ...elements)=>this.chain(new LPushXCommand([
            key,
            ...elements
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/lrange
   */ lrange = (...args)=>this.chain(new LRangeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/lrem
   */ lrem = (key, count, value)=>this.chain(new LRemCommand([
            key,
            count,
            value
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/lset
   */ lset = (key, index, value)=>this.chain(new LSetCommand([
            key,
            index,
            value
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/ltrim
   */ ltrim = (...args)=>this.chain(new LTrimCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/mget
   */ mget = (...args)=>this.chain(new MGetCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/mset
   */ mset = (kv)=>this.chain(new MSetCommand([
            kv
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/msetnx
   */ msetnx = (kv)=>this.chain(new MSetNXCommand([
            kv
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/persist
   */ persist = (...args)=>this.chain(new PersistCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/pexpire
   */ pexpire = (...args)=>this.chain(new PExpireCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/pexpireat
   */ pexpireat = (...args)=>this.chain(new PExpireAtCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/pfadd
   */ pfadd = (...args)=>this.chain(new PfAddCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/pfcount
   */ pfcount = (...args)=>this.chain(new PfCountCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/pfmerge
   */ pfmerge = (...args)=>this.chain(new PfMergeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/ping
   */ ping = (args)=>this.chain(new PingCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/psetex
   */ psetex = (key, ttl, value)=>this.chain(new PSetEXCommand([
            key,
            ttl,
            value
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/pttl
   */ pttl = (...args)=>this.chain(new PTtlCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/publish
   */ publish = (...args)=>this.chain(new PublishCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/randomkey
   */ randomkey = ()=>this.chain(new RandomKeyCommand(this.commandOptions));
    /**
   * @see https://redis.io/commands/rename
   */ rename = (...args)=>this.chain(new RenameCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/renamenx
   */ renamenx = (...args)=>this.chain(new RenameNXCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/rpop
   */ rpop = (...args)=>this.chain(new RPopCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/rpush
   */ rpush = (key, ...elements)=>this.chain(new RPushCommand([
            key,
            ...elements
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/rpushx
   */ rpushx = (key, ...elements)=>this.chain(new RPushXCommand([
            key,
            ...elements
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/sadd
   */ sadd = (key, member, ...members)=>this.chain(new SAddCommand([
            key,
            member,
            ...members
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/scan
   */ scan = (...args)=>this.chain(new ScanCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/scard
   */ scard = (...args)=>this.chain(new SCardCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/script-exists
   */ scriptExists = (...args)=>this.chain(new ScriptExistsCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/script-flush
   */ scriptFlush = (...args)=>this.chain(new ScriptFlushCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/script-load
   */ scriptLoad = (...args)=>this.chain(new ScriptLoadCommand(args, this.commandOptions));
    /*)*
   * @see https://redis.io/commands/sdiff
   */ sdiff = (...args)=>this.chain(new SDiffCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/sdiffstore
   */ sdiffstore = (...args)=>this.chain(new SDiffStoreCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/set
   */ set = (key, value, opts)=>this.chain(new SetCommand([
            key,
            value,
            opts
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/setbit
   */ setbit = (...args)=>this.chain(new SetBitCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/setex
   */ setex = (key, ttl, value)=>this.chain(new SetExCommand([
            key,
            ttl,
            value
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/setnx
   */ setnx = (key, value)=>this.chain(new SetNxCommand([
            key,
            value
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/setrange
   */ setrange = (...args)=>this.chain(new SetRangeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/sinter
   */ sinter = (...args)=>this.chain(new SInterCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/sinterstore
   */ sinterstore = (...args)=>this.chain(new SInterStoreCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/sismember
   */ sismember = (key, member)=>this.chain(new SIsMemberCommand([
            key,
            member
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/smembers
   */ smembers = (...args)=>this.chain(new SMembersCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/smismember
   */ smismember = (key, members)=>this.chain(new SMIsMemberCommand([
            key,
            members
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/smove
   */ smove = (source, destination, member)=>this.chain(new SMoveCommand([
            source,
            destination,
            member
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/spop
   */ spop = (...args)=>this.chain(new SPopCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/srandmember
   */ srandmember = (...args)=>this.chain(new SRandMemberCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/srem
   */ srem = (key, ...members)=>this.chain(new SRemCommand([
            key,
            ...members
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/sscan
   */ sscan = (...args)=>this.chain(new SScanCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/strlen
   */ strlen = (...args)=>this.chain(new StrLenCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/sunion
   */ sunion = (...args)=>this.chain(new SUnionCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/sunionstore
   */ sunionstore = (...args)=>this.chain(new SUnionStoreCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/time
   */ time = ()=>this.chain(new TimeCommand(this.commandOptions));
    /**
   * @see https://redis.io/commands/touch
   */ touch = (...args)=>this.chain(new TouchCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/ttl
   */ ttl = (...args)=>this.chain(new TtlCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/type
   */ type = (...args)=>this.chain(new TypeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/unlink
   */ unlink = (...args)=>this.chain(new UnlinkCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zadd
   */ zadd = (...args)=>{
        if ("score" in args[1]) {
            return this.chain(new ZAddCommand([
                args[0],
                args[1],
                ...args.slice(2)
            ], this.commandOptions));
        }
        return this.chain(new ZAddCommand([
            args[0],
            args[1],
            ...args.slice(2)
        ], this.commandOptions));
    };
    /**
   * @see https://redis.io/commands/xadd
   */ xadd = (...args)=>this.chain(new XAddCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xack
   */ xack = (...args)=>this.chain(new XAckCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xdel
   */ xdel = (...args)=>this.chain(new XDelCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xgroup
   */ xgroup = (...args)=>this.chain(new XGroupCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xread
   */ xread = (...args)=>this.chain(new XReadCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xreadgroup
   */ xreadgroup = (...args)=>this.chain(new XReadGroupCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xinfo
   */ xinfo = (...args)=>this.chain(new XInfoCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xlen
   */ xlen = (...args)=>this.chain(new XLenCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xpending
   */ xpending = (...args)=>this.chain(new XPendingCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xclaim
   */ xclaim = (...args)=>this.chain(new XClaimCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xautoclaim
   */ xautoclaim = (...args)=>this.chain(new XAutoClaim(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xtrim
   */ xtrim = (...args)=>this.chain(new XTrimCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xrange
   */ xrange = (...args)=>this.chain(new XRangeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/xrevrange
   */ xrevrange = (...args)=>this.chain(new XRevRangeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zcard
   */ zcard = (...args)=>this.chain(new ZCardCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zcount
   */ zcount = (...args)=>this.chain(new ZCountCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zincrby
   */ zincrby = (key, increment, member)=>this.chain(new ZIncrByCommand([
            key,
            increment,
            member
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/zinterstore
   */ zinterstore = (...args)=>this.chain(new ZInterStoreCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zlexcount
   */ zlexcount = (...args)=>this.chain(new ZLexCountCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zmscore
   */ zmscore = (...args)=>this.chain(new ZMScoreCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zpopmax
   */ zpopmax = (...args)=>this.chain(new ZPopMaxCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zpopmin
   */ zpopmin = (...args)=>this.chain(new ZPopMinCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zrange
   */ zrange = (...args)=>this.chain(new ZRangeCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zrank
   */ zrank = (key, member)=>this.chain(new ZRankCommand([
            key,
            member
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/zrem
   */ zrem = (key, ...members)=>this.chain(new ZRemCommand([
            key,
            ...members
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/zremrangebylex
   */ zremrangebylex = (...args)=>this.chain(new ZRemRangeByLexCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zremrangebyrank
   */ zremrangebyrank = (...args)=>this.chain(new ZRemRangeByRankCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zremrangebyscore
   */ zremrangebyscore = (...args)=>this.chain(new ZRemRangeByScoreCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zrevrank
   */ zrevrank = (key, member)=>this.chain(new ZRevRankCommand([
            key,
            member
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/zscan
   */ zscan = (...args)=>this.chain(new ZScanCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zscore
   */ zscore = (key, member)=>this.chain(new ZScoreCommand([
            key,
            member
        ], this.commandOptions));
    /**
   * @see https://redis.io/commands/zunionstore
   */ zunionstore = (...args)=>this.chain(new ZUnionStoreCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/zunion
   */ zunion = (...args)=>this.chain(new ZUnionCommand(args, this.commandOptions));
    /**
   * @see https://redis.io/commands/?group=json
   */ get json() {
        return {
            /**
       * @see https://redis.io/commands/json.arrappend
       */ arrappend: (...args)=>this.chain(new JsonArrAppendCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.arrindex
       */ arrindex: (...args)=>this.chain(new JsonArrIndexCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.arrinsert
       */ arrinsert: (...args)=>this.chain(new JsonArrInsertCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.arrlen
       */ arrlen: (...args)=>this.chain(new JsonArrLenCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.arrpop
       */ arrpop: (...args)=>this.chain(new JsonArrPopCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.arrtrim
       */ arrtrim: (...args)=>this.chain(new JsonArrTrimCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.clear
       */ clear: (...args)=>this.chain(new JsonClearCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.del
       */ del: (...args)=>this.chain(new JsonDelCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.forget
       */ forget: (...args)=>this.chain(new JsonForgetCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.get
       */ get: (...args)=>this.chain(new JsonGetCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.merge
       */ merge: (...args)=>this.chain(new JsonMergeCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.mget
       */ mget: (...args)=>this.chain(new JsonMGetCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.mset
       */ mset: (...args)=>this.chain(new JsonMSetCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.numincrby
       */ numincrby: (...args)=>this.chain(new JsonNumIncrByCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.nummultby
       */ nummultby: (...args)=>this.chain(new JsonNumMultByCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.objkeys
       */ objkeys: (...args)=>this.chain(new JsonObjKeysCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.objlen
       */ objlen: (...args)=>this.chain(new JsonObjLenCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.resp
       */ resp: (...args)=>this.chain(new JsonRespCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.set
       */ set: (...args)=>this.chain(new JsonSetCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.strappend
       */ strappend: (...args)=>this.chain(new JsonStrAppendCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.strlen
       */ strlen: (...args)=>this.chain(new JsonStrLenCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.toggle
       */ toggle: (...args)=>this.chain(new JsonToggleCommand(args, this.commandOptions)),
            /**
       * @see https://redis.io/commands/json.type
       */ type: (...args)=>this.chain(new JsonTypeCommand(args, this.commandOptions))
        };
    }
};
// pkg/auto-pipeline.ts
var EXCLUDE_COMMANDS = /* @__PURE__ */ new Set([
    "scan",
    "keys",
    "flushdb",
    "flushall",
    "dbsize",
    "hscan",
    "hgetall",
    "hkeys",
    "lrange",
    "sscan",
    "smembers",
    "xrange",
    "xrevrange",
    "zscan",
    "zrange",
    "exec"
]);
function createAutoPipelineProxy(_redis, json) {
    const redis = _redis;
    if (!redis.autoPipelineExecutor) {
        redis.autoPipelineExecutor = new AutoPipelineExecutor(redis);
    }
    return new Proxy(redis, {
        get: (redis2, command)=>{
            if (command === "pipelineCounter") {
                return redis2.autoPipelineExecutor.pipelineCounter;
            }
            if (command === "json") {
                return createAutoPipelineProxy(redis2, true);
            }
            const commandInRedisButNotPipeline = command in redis2 && !(command in redis2.autoPipelineExecutor.pipeline);
            const isCommandExcluded = EXCLUDE_COMMANDS.has(command);
            if (commandInRedisButNotPipeline || isCommandExcluded) {
                return redis2[command];
            }
            const isFunction = json ? typeof redis2.autoPipelineExecutor.pipeline.json[command] === "function" : typeof redis2.autoPipelineExecutor.pipeline[command] === "function";
            if (isFunction) {
                return (...args)=>{
                    return redis2.autoPipelineExecutor.withAutoPipeline((pipeline)=>{
                        if (json) {
                            pipeline.json[command](...args);
                        } else {
                            pipeline[command](...args);
                        }
                    });
                };
            }
            return redis2.autoPipelineExecutor.pipeline[command];
        }
    });
}
var AutoPipelineExecutor = class {
    pipelinePromises = /* @__PURE__ */ new WeakMap();
    activePipeline = null;
    indexInCurrentPipeline = 0;
    redis;
    pipeline;
    // only to make sure that proxy can work
    pipelineCounter = 0;
    // to keep track of how many times a pipeline was executed
    constructor(redis){
        this.redis = redis;
        this.pipeline = redis.pipeline();
    }
    async withAutoPipeline(executeWithPipeline) {
        const pipeline = this.activePipeline ?? this.redis.pipeline();
        if (!this.activePipeline) {
            this.activePipeline = pipeline;
            this.indexInCurrentPipeline = 0;
        }
        const index = this.indexInCurrentPipeline++;
        executeWithPipeline(pipeline);
        const pipelineDone = this.deferExecution().then(()=>{
            if (!this.pipelinePromises.has(pipeline)) {
                const pipelinePromise = pipeline.exec({
                    keepErrors: true
                });
                this.pipelineCounter += 1;
                this.pipelinePromises.set(pipeline, pipelinePromise);
                this.activePipeline = null;
            }
            return this.pipelinePromises.get(pipeline);
        });
        const results = await pipelineDone;
        const commandResult = results[index];
        if (commandResult.error) {
            throw new UpstashError(`Command failed: ${commandResult.error}`);
        }
        return commandResult.result;
    }
    async deferExecution() {
        await Promise.resolve();
        await Promise.resolve();
    }
};
// pkg/commands/psubscribe.ts
var PSubscribeCommand = class extends Command {
    constructor(cmd, opts){
        const sseHeaders = {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive"
        };
        super([], {
            ...opts,
            headers: sseHeaders,
            path: [
                "psubscribe",
                ...cmd
            ],
            streamOptions: {
                isStreaming: true,
                onMessage: opts?.streamOptions?.onMessage,
                signal: opts?.streamOptions?.signal
            }
        });
    }
};
// pkg/commands/subscribe.ts
var Subscriber = class extends EventTarget {
    subscriptions;
    client;
    listeners;
    opts;
    constructor(client, channels, isPattern = false, opts){
        super();
        this.client = client;
        this.subscriptions = /* @__PURE__ */ new Map();
        this.listeners = /* @__PURE__ */ new Map();
        this.opts = opts;
        for (const channel of channels){
            if (isPattern) {
                this.subscribeToPattern(channel);
            } else {
                this.subscribeToChannel(channel);
            }
        }
    }
    subscribeToChannel(channel) {
        const controller = new AbortController();
        const command = new SubscribeCommand([
            channel
        ], {
            streamOptions: {
                signal: controller.signal,
                onMessage: (data)=>this.handleMessage(data, false)
            }
        });
        command.exec(this.client).catch((error)=>{
            if (error.name !== "AbortError") {
                this.dispatchToListeners("error", error);
            }
        });
        this.subscriptions.set(channel, {
            command,
            controller,
            isPattern: false
        });
    }
    subscribeToPattern(pattern) {
        const controller = new AbortController();
        const command = new PSubscribeCommand([
            pattern
        ], {
            streamOptions: {
                signal: controller.signal,
                onMessage: (data)=>this.handleMessage(data, true)
            }
        });
        command.exec(this.client).catch((error)=>{
            if (error.name !== "AbortError") {
                this.dispatchToListeners("error", error);
            }
        });
        this.subscriptions.set(pattern, {
            command,
            controller,
            isPattern: true
        });
    }
    handleMessage(data, isPattern) {
        const messageData = data.replace(/^data:\s*/, "");
        const firstCommaIndex = messageData.indexOf(",");
        const secondCommaIndex = messageData.indexOf(",", firstCommaIndex + 1);
        const thirdCommaIndex = isPattern ? messageData.indexOf(",", secondCommaIndex + 1) : -1;
        if (firstCommaIndex !== -1 && secondCommaIndex !== -1) {
            const type = messageData.slice(0, firstCommaIndex);
            if (isPattern && type === "pmessage" && thirdCommaIndex !== -1) {
                const pattern = messageData.slice(firstCommaIndex + 1, secondCommaIndex);
                const channel = messageData.slice(secondCommaIndex + 1, thirdCommaIndex);
                const messageStr = messageData.slice(thirdCommaIndex + 1);
                try {
                    const message = this.opts?.automaticDeserialization === false ? messageStr : JSON.parse(messageStr);
                    this.dispatchToListeners("pmessage", {
                        pattern,
                        channel,
                        message
                    });
                    this.dispatchToListeners(`pmessage:${pattern}`, {
                        pattern,
                        channel,
                        message
                    });
                } catch (error) {
                    this.dispatchToListeners("error", new Error(`Failed to parse message: ${error}`));
                }
            } else {
                const channel = messageData.slice(firstCommaIndex + 1, secondCommaIndex);
                const messageStr = messageData.slice(secondCommaIndex + 1);
                try {
                    if (type === "subscribe" || type === "psubscribe" || type === "unsubscribe" || type === "punsubscribe") {
                        const count = Number.parseInt(messageStr);
                        this.dispatchToListeners(type, count);
                    } else {
                        const message = this.opts?.automaticDeserialization === false ? messageStr : parseWithTryCatch(messageStr);
                        this.dispatchToListeners(type, {
                            channel,
                            message
                        });
                        this.dispatchToListeners(`${type}:${channel}`, {
                            channel,
                            message
                        });
                    }
                } catch (error) {
                    this.dispatchToListeners("error", new Error(`Failed to parse message: ${error}`));
                }
            }
        }
    }
    dispatchToListeners(type, data) {
        const listeners = this.listeners.get(type);
        if (listeners) {
            for (const listener of listeners){
                listener(data);
            }
        }
    }
    on(type, listener) {
        if (!this.listeners.has(type)) {
            this.listeners.set(type, /* @__PURE__ */ new Set());
        }
        this.listeners.get(type)?.add(listener);
    }
    removeAllListeners() {
        this.listeners.clear();
    }
    async unsubscribe(channels) {
        if (channels) {
            for (const channel of channels){
                const subscription = this.subscriptions.get(channel);
                if (subscription) {
                    try {
                        subscription.controller.abort();
                    } catch  {}
                    this.subscriptions.delete(channel);
                }
            }
        } else {
            for (const subscription of this.subscriptions.values()){
                try {
                    subscription.controller.abort();
                } catch  {}
            }
            this.subscriptions.clear();
            this.removeAllListeners();
        }
    }
    getSubscribedChannels() {
        return [
            ...this.subscriptions.keys()
        ];
    }
};
var SubscribeCommand = class extends Command {
    constructor(cmd, opts){
        const sseHeaders = {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive"
        };
        super([], {
            ...opts,
            headers: sseHeaders,
            path: [
                "subscribe",
                ...cmd
            ],
            streamOptions: {
                isStreaming: true,
                onMessage: opts?.streamOptions?.onMessage,
                signal: opts?.streamOptions?.signal
            }
        });
    }
};
var parseWithTryCatch = (str)=>{
    try {
        return JSON.parse(str);
    } catch  {
        return str;
    }
};
;
var Script = class {
    script;
    /**
   * @deprecated This property is initialized to an empty string and will be set in the init method
   * asynchronously. Do not use this property immidiately after the constructor.
   *
   * This property is only exposed for backwards compatibility and will be removed in the
   * future major release.
   */ sha1;
    redis;
    constructor(redis, script){
        this.redis = redis;
        this.script = script;
        this.sha1 = "";
        void this.init(script);
    }
    /**
   * Initialize the script by computing its SHA-1 hash.
   */ async init(script) {
        if (this.sha1) return;
        this.sha1 = await this.digest(script);
    }
    /**
   * Send an `EVAL` command to redis.
   */ async eval(keys, args) {
        await this.init(this.script);
        return await this.redis.eval(this.script, keys, args);
    }
    /**
   * Calculates the sha1 hash of the script and then calls `EVALSHA`.
   */ async evalsha(keys, args) {
        await this.init(this.script);
        return await this.redis.evalsha(this.sha1, keys, args);
    }
    /**
   * Optimistically try to run `EVALSHA` first.
   * If the script is not loaded in redis, it will fall back and try again with `EVAL`.
   *
   * Following calls will be able to use the cached script
   */ async exec(keys, args) {
        await this.init(this.script);
        const res = await this.redis.evalsha(this.sha1, keys, args).catch(async (error)=>{
            if (error instanceof Error && error.message.toLowerCase().includes("noscript")) {
                return await this.redis.eval(this.script, keys, args);
            }
            throw error;
        });
        return res;
    }
    /**
   * Compute the sha1 hash of the script and return its hex representation.
   */ async digest(s) {
        const data = new TextEncoder().encode(s);
        const hashBuffer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uncrypto$2f$dist$2f$crypto$2e$web$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["subtle"].digest("SHA-1", data);
        const hashArray = [
            ...new Uint8Array(hashBuffer)
        ];
        return hashArray.map((b)=>b.toString(16).padStart(2, "0")).join("");
    }
};
;
var ScriptRO = class {
    script;
    /**
   * @deprecated This property is initialized to an empty string and will be set in the init method
   * asynchronously. Do not use this property immidiately after the constructor.
   *
   * This property is only exposed for backwards compatibility and will be removed in the
   * future major release.
   */ sha1;
    redis;
    constructor(redis, script){
        this.redis = redis;
        this.sha1 = "";
        this.script = script;
        void this.init(script);
    }
    async init(script) {
        if (this.sha1) return;
        this.sha1 = await this.digest(script);
    }
    /**
   * Send an `EVAL_RO` command to redis.
   */ async evalRo(keys, args) {
        await this.init(this.script);
        return await this.redis.evalRo(this.script, keys, args);
    }
    /**
   * Calculates the sha1 hash of the script and then calls `EVALSHA_RO`.
   */ async evalshaRo(keys, args) {
        await this.init(this.script);
        return await this.redis.evalshaRo(this.sha1, keys, args);
    }
    /**
   * Optimistically try to run `EVALSHA_RO` first.
   * If the script is not loaded in redis, it will fall back and try again with `EVAL_RO`.
   *
   * Following calls will be able to use the cached script
   */ async exec(keys, args) {
        await this.init(this.script);
        const res = await this.redis.evalshaRo(this.sha1, keys, args).catch(async (error)=>{
            if (error instanceof Error && error.message.toLowerCase().includes("noscript")) {
                return await this.redis.evalRo(this.script, keys, args);
            }
            throw error;
        });
        return res;
    }
    /**
   * Compute the sha1 hash of the script and return its hex representation.
   */ async digest(s) {
        const data = new TextEncoder().encode(s);
        const hashBuffer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uncrypto$2f$dist$2f$crypto$2e$web$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["subtle"].digest("SHA-1", data);
        const hashArray = [
            ...new Uint8Array(hashBuffer)
        ];
        return hashArray.map((b)=>b.toString(16).padStart(2, "0")).join("");
    }
};
// pkg/redis.ts
var Redis = class {
    client;
    opts;
    enableTelemetry;
    enableAutoPipelining;
    /**
   * Create a new redis client
   *
   * @example
   * ```typescript
   * const redis = new Redis({
   *  url: "<UPSTASH_REDIS_REST_URL>",
   *  token: "<UPSTASH_REDIS_REST_TOKEN>",
   * });
   * ```
   */ constructor(client, opts){
        this.client = client;
        this.opts = opts;
        this.enableTelemetry = opts?.enableTelemetry ?? true;
        if (opts?.readYourWrites === false) {
            this.client.readYourWrites = false;
        }
        this.enableAutoPipelining = opts?.enableAutoPipelining ?? true;
    }
    get readYourWritesSyncToken() {
        return this.client.upstashSyncToken;
    }
    set readYourWritesSyncToken(session) {
        this.client.upstashSyncToken = session;
    }
    get json() {
        return {
            /**
       * @see https://redis.io/commands/json.arrappend
       */ arrappend: (...args)=>new JsonArrAppendCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.arrindex
       */ arrindex: (...args)=>new JsonArrIndexCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.arrinsert
       */ arrinsert: (...args)=>new JsonArrInsertCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.arrlen
       */ arrlen: (...args)=>new JsonArrLenCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.arrpop
       */ arrpop: (...args)=>new JsonArrPopCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.arrtrim
       */ arrtrim: (...args)=>new JsonArrTrimCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.clear
       */ clear: (...args)=>new JsonClearCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.del
       */ del: (...args)=>new JsonDelCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.forget
       */ forget: (...args)=>new JsonForgetCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.get
       */ get: (...args)=>new JsonGetCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.merge
       */ merge: (...args)=>new JsonMergeCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.mget
       */ mget: (...args)=>new JsonMGetCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.mset
       */ mset: (...args)=>new JsonMSetCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.numincrby
       */ numincrby: (...args)=>new JsonNumIncrByCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.nummultby
       */ nummultby: (...args)=>new JsonNumMultByCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.objkeys
       */ objkeys: (...args)=>new JsonObjKeysCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.objlen
       */ objlen: (...args)=>new JsonObjLenCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.resp
       */ resp: (...args)=>new JsonRespCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.set
       */ set: (...args)=>new JsonSetCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.strappend
       */ strappend: (...args)=>new JsonStrAppendCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.strlen
       */ strlen: (...args)=>new JsonStrLenCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.toggle
       */ toggle: (...args)=>new JsonToggleCommand(args, this.opts).exec(this.client),
            /**
       * @see https://redis.io/commands/json.type
       */ type: (...args)=>new JsonTypeCommand(args, this.opts).exec(this.client)
        };
    }
    /**
   * Wrap a new middleware around the HTTP client.
   */ use = (middleware)=>{
        const makeRequest = this.client.request.bind(this.client);
        this.client.request = (req)=>middleware(req, makeRequest);
    };
    /**
   * Technically this is not private, we can hide it from intellisense by doing this
   */ addTelemetry = (telemetry)=>{
        if (!this.enableTelemetry) {
            return;
        }
        try {
            this.client.mergeTelemetry(telemetry);
        } catch  {}
    };
    /**
   * Creates a new script.
   *
   * Scripts offer the ability to optimistically try to execute a script without having to send the
   * entire script to the server. If the script is loaded on the server, it tries again by sending
   * the entire script. Afterwards, the script is cached on the server.
   *
   * @param script - The script to create
   * @param opts - Optional options to pass to the script `{ readonly?: boolean }`
   * @returns A new script
   *
   * @example
   * ```ts
   * const redis = new Redis({...})
   *
   * const script = redis.createScript<string>("return ARGV[1];")
   * const arg1 = await script.eval([], ["Hello World"])
   * expect(arg1, "Hello World")
   * ```
   * @example
   * ```ts
   * const redis = new Redis({...})
   *
   * const script = redis.createScript<string>("return ARGV[1];", { readonly: true })
   * const arg1 = await script.evalRo([], ["Hello World"])
   * expect(arg1, "Hello World")
   * ```
   */ createScript(script, opts) {
        return opts?.readonly ? new ScriptRO(this, script) : new Script(this, script);
    }
    /**
   * Create a new pipeline that allows you to send requests in bulk.
   *
   * @see {@link Pipeline}
   */ pipeline = ()=>new Pipeline({
            client: this.client,
            commandOptions: this.opts,
            multiExec: false
        });
    autoPipeline = ()=>{
        return createAutoPipelineProxy(this);
    };
    /**
   * Create a new transaction to allow executing multiple steps atomically.
   *
   * All the commands in a transaction are serialized and executed sequentially. A request sent by
   * another client will never be served in the middle of the execution of a Redis Transaction. This
   * guarantees that the commands are executed as a single isolated operation.
   *
   * @see {@link Pipeline}
   */ multi = ()=>new Pipeline({
            client: this.client,
            commandOptions: this.opts,
            multiExec: true
        });
    /**
   * Returns an instance that can be used to execute `BITFIELD` commands on one key.
   *
   * @example
   * ```typescript
   * redis.set("mykey", 0);
   * const result = await redis.bitfield("mykey")
   *   .set("u4", 0, 16)
   *   .incr("u4", "#1", 1)
   *   .exec();
   * console.log(result); // [0, 1]
   * ```
   *
   * @see https://redis.io/commands/bitfield
   */ bitfield = (...args)=>new BitFieldCommand(args, this.client, this.opts);
    /**
   * @see https://redis.io/commands/append
   */ append = (...args)=>new AppendCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/bitcount
   */ bitcount = (...args)=>new BitCountCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/bitop
   */ bitop = (op, destinationKey, sourceKey, ...sourceKeys)=>new BitOpCommand([
            op,
            destinationKey,
            sourceKey,
            ...sourceKeys
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/bitpos
   */ bitpos = (...args)=>new BitPosCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/copy
   */ copy = (...args)=>new CopyCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/dbsize
   */ dbsize = ()=>new DBSizeCommand(this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/decr
   */ decr = (...args)=>new DecrCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/decrby
   */ decrby = (...args)=>new DecrByCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/del
   */ del = (...args)=>new DelCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/echo
   */ echo = (...args)=>new EchoCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/eval_ro
   */ evalRo = (...args)=>new EvalROCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/eval
   */ eval = (...args)=>new EvalCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/evalsha_ro
   */ evalshaRo = (...args)=>new EvalshaROCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/evalsha
   */ evalsha = (...args)=>new EvalshaCommand(args, this.opts).exec(this.client);
    /**
   * Generic method to execute any Redis command.
   */ exec = (args)=>new ExecCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/exists
   */ exists = (...args)=>new ExistsCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/expire
   */ expire = (...args)=>new ExpireCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/expireat
   */ expireat = (...args)=>new ExpireAtCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/flushall
   */ flushall = (args)=>new FlushAllCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/flushdb
   */ flushdb = (...args)=>new FlushDBCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/geoadd
   */ geoadd = (...args)=>new GeoAddCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/geopos
   */ geopos = (...args)=>new GeoPosCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/geodist
   */ geodist = (...args)=>new GeoDistCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/geohash
   */ geohash = (...args)=>new GeoHashCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/geosearch
   */ geosearch = (...args)=>new GeoSearchCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/geosearchstore
   */ geosearchstore = (...args)=>new GeoSearchStoreCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/get
   */ get = (...args)=>new GetCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/getbit
   */ getbit = (...args)=>new GetBitCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/getdel
   */ getdel = (...args)=>new GetDelCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/getex
   */ getex = (...args)=>new GetExCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/getrange
   */ getrange = (...args)=>new GetRangeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/getset
   */ getset = (key, value)=>new GetSetCommand([
            key,
            value
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hdel
   */ hdel = (...args)=>new HDelCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hexists
   */ hexists = (...args)=>new HExistsCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hexpire
   */ hexpire = (...args)=>new HExpireCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hexpireat
   */ hexpireat = (...args)=>new HExpireAtCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hexpiretime
   */ hexpiretime = (...args)=>new HExpireTimeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/httl
   */ httl = (...args)=>new HTtlCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hpexpire
   */ hpexpire = (...args)=>new HPExpireCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hpexpireat
   */ hpexpireat = (...args)=>new HPExpireAtCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hpexpiretime
   */ hpexpiretime = (...args)=>new HPExpireTimeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hpttl
   */ hpttl = (...args)=>new HPTtlCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hpersist
   */ hpersist = (...args)=>new HPersistCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hget
   */ hget = (...args)=>new HGetCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hgetall
   */ hgetall = (...args)=>new HGetAllCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hincrby
   */ hincrby = (...args)=>new HIncrByCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hincrbyfloat
   */ hincrbyfloat = (...args)=>new HIncrByFloatCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hkeys
   */ hkeys = (...args)=>new HKeysCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hlen
   */ hlen = (...args)=>new HLenCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hmget
   */ hmget = (...args)=>new HMGetCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hmset
   */ hmset = (key, kv)=>new HMSetCommand([
            key,
            kv
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hrandfield
   */ hrandfield = (key, count, withValues)=>new HRandFieldCommand([
            key,
            count,
            withValues
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hscan
   */ hscan = (...args)=>new HScanCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hset
   */ hset = (key, kv)=>new HSetCommand([
            key,
            kv
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hsetnx
   */ hsetnx = (key, field, value)=>new HSetNXCommand([
            key,
            field,
            value
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hstrlen
   */ hstrlen = (...args)=>new HStrLenCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/hvals
   */ hvals = (...args)=>new HValsCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/incr
   */ incr = (...args)=>new IncrCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/incrby
   */ incrby = (...args)=>new IncrByCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/incrbyfloat
   */ incrbyfloat = (...args)=>new IncrByFloatCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/keys
   */ keys = (...args)=>new KeysCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lindex
   */ lindex = (...args)=>new LIndexCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/linsert
   */ linsert = (key, direction, pivot, value)=>new LInsertCommand([
            key,
            direction,
            pivot,
            value
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/llen
   */ llen = (...args)=>new LLenCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lmove
   */ lmove = (...args)=>new LMoveCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lpop
   */ lpop = (...args)=>new LPopCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lmpop
   */ lmpop = (...args)=>new LmPopCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lpos
   */ lpos = (...args)=>new LPosCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lpush
   */ lpush = (key, ...elements)=>new LPushCommand([
            key,
            ...elements
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lpushx
   */ lpushx = (key, ...elements)=>new LPushXCommand([
            key,
            ...elements
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lrange
   */ lrange = (...args)=>new LRangeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lrem
   */ lrem = (key, count, value)=>new LRemCommand([
            key,
            count,
            value
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/lset
   */ lset = (key, index, value)=>new LSetCommand([
            key,
            index,
            value
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/ltrim
   */ ltrim = (...args)=>new LTrimCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/mget
   */ mget = (...args)=>new MGetCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/mset
   */ mset = (kv)=>new MSetCommand([
            kv
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/msetnx
   */ msetnx = (kv)=>new MSetNXCommand([
            kv
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/persist
   */ persist = (...args)=>new PersistCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/pexpire
   */ pexpire = (...args)=>new PExpireCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/pexpireat
   */ pexpireat = (...args)=>new PExpireAtCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/pfadd
   */ pfadd = (...args)=>new PfAddCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/pfcount
   */ pfcount = (...args)=>new PfCountCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/pfmerge
   */ pfmerge = (...args)=>new PfMergeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/ping
   */ ping = (args)=>new PingCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/psetex
   */ psetex = (key, ttl, value)=>new PSetEXCommand([
            key,
            ttl,
            value
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/psubscribe
   */ psubscribe = (patterns)=>{
        const patternArray = Array.isArray(patterns) ? patterns : [
            patterns
        ];
        return new Subscriber(this.client, patternArray, true, this.opts);
    };
    /**
   * @see https://redis.io/commands/pttl
   */ pttl = (...args)=>new PTtlCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/publish
   */ publish = (...args)=>new PublishCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/randomkey
   */ randomkey = ()=>new RandomKeyCommand().exec(this.client);
    /**
   * @see https://redis.io/commands/rename
   */ rename = (...args)=>new RenameCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/renamenx
   */ renamenx = (...args)=>new RenameNXCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/rpop
   */ rpop = (...args)=>new RPopCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/rpush
   */ rpush = (key, ...elements)=>new RPushCommand([
            key,
            ...elements
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/rpushx
   */ rpushx = (key, ...elements)=>new RPushXCommand([
            key,
            ...elements
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/sadd
   */ sadd = (key, member, ...members)=>new SAddCommand([
            key,
            member,
            ...members
        ], this.opts).exec(this.client);
    scan(cursor, opts) {
        return new ScanCommand([
            cursor,
            opts
        ], this.opts).exec(this.client);
    }
    /**
   * @see https://redis.io/commands/scard
   */ scard = (...args)=>new SCardCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/script-exists
   */ scriptExists = (...args)=>new ScriptExistsCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/script-flush
   */ scriptFlush = (...args)=>new ScriptFlushCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/script-load
   */ scriptLoad = (...args)=>new ScriptLoadCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/sdiff
   */ sdiff = (...args)=>new SDiffCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/sdiffstore
   */ sdiffstore = (...args)=>new SDiffStoreCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/set
   */ set = (key, value, opts)=>new SetCommand([
            key,
            value,
            opts
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/setbit
   */ setbit = (...args)=>new SetBitCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/setex
   */ setex = (key, ttl, value)=>new SetExCommand([
            key,
            ttl,
            value
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/setnx
   */ setnx = (key, value)=>new SetNxCommand([
            key,
            value
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/setrange
   */ setrange = (...args)=>new SetRangeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/sinter
   */ sinter = (...args)=>new SInterCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/sinterstore
   */ sinterstore = (...args)=>new SInterStoreCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/sismember
   */ sismember = (key, member)=>new SIsMemberCommand([
            key,
            member
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/smismember
   */ smismember = (key, members)=>new SMIsMemberCommand([
            key,
            members
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/smembers
   */ smembers = (...args)=>new SMembersCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/smove
   */ smove = (source, destination, member)=>new SMoveCommand([
            source,
            destination,
            member
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/spop
   */ spop = (...args)=>new SPopCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/srandmember
   */ srandmember = (...args)=>new SRandMemberCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/srem
   */ srem = (key, ...members)=>new SRemCommand([
            key,
            ...members
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/sscan
   */ sscan = (...args)=>new SScanCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/strlen
   */ strlen = (...args)=>new StrLenCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/subscribe
   */ subscribe = (channels)=>{
        const channelArray = Array.isArray(channels) ? channels : [
            channels
        ];
        return new Subscriber(this.client, channelArray, false, this.opts);
    };
    /**
   * @see https://redis.io/commands/sunion
   */ sunion = (...args)=>new SUnionCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/sunionstore
   */ sunionstore = (...args)=>new SUnionStoreCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/time
   */ time = ()=>new TimeCommand().exec(this.client);
    /**
   * @see https://redis.io/commands/touch
   */ touch = (...args)=>new TouchCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/ttl
   */ ttl = (...args)=>new TtlCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/type
   */ type = (...args)=>new TypeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/unlink
   */ unlink = (...args)=>new UnlinkCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xadd
   */ xadd = (...args)=>new XAddCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xack
   */ xack = (...args)=>new XAckCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xdel
   */ xdel = (...args)=>new XDelCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xgroup
   */ xgroup = (...args)=>new XGroupCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xread
   */ xread = (...args)=>new XReadCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xreadgroup
   */ xreadgroup = (...args)=>new XReadGroupCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xinfo
   */ xinfo = (...args)=>new XInfoCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xlen
   */ xlen = (...args)=>new XLenCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xpending
   */ xpending = (...args)=>new XPendingCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xclaim
   */ xclaim = (...args)=>new XClaimCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xautoclaim
   */ xautoclaim = (...args)=>new XAutoClaim(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xtrim
   */ xtrim = (...args)=>new XTrimCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xrange
   */ xrange = (...args)=>new XRangeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/xrevrange
   */ xrevrange = (...args)=>new XRevRangeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zadd
   */ zadd = (...args)=>{
        if ("score" in args[1]) {
            return new ZAddCommand([
                args[0],
                args[1],
                ...args.slice(2)
            ], this.opts).exec(this.client);
        }
        return new ZAddCommand([
            args[0],
            args[1],
            ...args.slice(2)
        ], this.opts).exec(this.client);
    };
    /**
   * @see https://redis.io/commands/zcard
   */ zcard = (...args)=>new ZCardCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zcount
   */ zcount = (...args)=>new ZCountCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zdiffstore
   */ zdiffstore = (...args)=>new ZDiffStoreCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zincrby
   */ zincrby = (key, increment, member)=>new ZIncrByCommand([
            key,
            increment,
            member
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zinterstore
   */ zinterstore = (...args)=>new ZInterStoreCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zlexcount
   */ zlexcount = (...args)=>new ZLexCountCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zmscore
   */ zmscore = (...args)=>new ZMScoreCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zpopmax
   */ zpopmax = (...args)=>new ZPopMaxCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zpopmin
   */ zpopmin = (...args)=>new ZPopMinCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zrange
   */ zrange = (...args)=>new ZRangeCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zrank
   */ zrank = (key, member)=>new ZRankCommand([
            key,
            member
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zrem
   */ zrem = (key, ...members)=>new ZRemCommand([
            key,
            ...members
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zremrangebylex
   */ zremrangebylex = (...args)=>new ZRemRangeByLexCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zremrangebyrank
   */ zremrangebyrank = (...args)=>new ZRemRangeByRankCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zremrangebyscore
   */ zremrangebyscore = (...args)=>new ZRemRangeByScoreCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zrevrank
   */ zrevrank = (key, member)=>new ZRevRankCommand([
            key,
            member
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zscan
   */ zscan = (...args)=>new ZScanCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zscore
   */ zscore = (key, member)=>new ZScoreCommand([
            key,
            member
        ], this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zunion
   */ zunion = (...args)=>new ZUnionCommand(args, this.opts).exec(this.client);
    /**
   * @see https://redis.io/commands/zunionstore
   */ zunionstore = (...args)=>new ZUnionStoreCommand(args, this.opts).exec(this.client);
};
// version.ts
var VERSION = "v1.35.6";
;

})()),
"[project]/node_modules/@upstash/redis/nodejs.mjs [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Redis": ()=>Redis2
});
var __TURBOPACK__commonjs__external__node$3a$buffer__ = __turbopack_external_require__("node:buffer", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$chunk$2d$TAJI6TAE$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@upstash/redis/chunk-TAJI6TAE.mjs [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
// platforms/nodejs.ts
if (typeof atob === "undefined") {
    global.atob = (b64)=>__TURBOPACK__commonjs__external__node$3a$buffer__["Buffer"].from(b64, "base64").toString("utf8");
}
var Redis2 = class _Redis extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$chunk$2d$TAJI6TAE$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["Redis"] {
    /**
   * Create a new redis client by providing a custom `Requester` implementation
   *
   * @example
   * ```ts
   *
   * import { UpstashRequest, Requester, UpstashResponse, Redis } from "@upstash/redis"
   *
   *  const requester: Requester = {
   *    request: <TResult>(req: UpstashRequest): Promise<UpstashResponse<TResult>> => {
   *      // ...
   *    }
   *  }
   *
   * const redis = new Redis(requester)
   * ```
   */ constructor(configOrRequester){
        if ("request" in configOrRequester) {
            super(configOrRequester);
            return;
        }
        if (!configOrRequester.url) {
            console.warn(`[Upstash Redis] The 'url' property is missing or undefined in your Redis config.`);
        } else if (configOrRequester.url.startsWith(" ") || configOrRequester.url.endsWith(" ") || /\r|\n/.test(configOrRequester.url)) {
            console.warn("[Upstash Redis] The redis url contains whitespace or newline, which can cause errors!");
        }
        if (!configOrRequester.token) {
            console.warn(`[Upstash Redis] The 'token' property is missing or undefined in your Redis config.`);
        } else if (configOrRequester.token.startsWith(" ") || configOrRequester.token.endsWith(" ") || /\r|\n/.test(configOrRequester.token)) {
            console.warn("[Upstash Redis] The redis token contains whitespace or newline, which can cause errors!");
        }
        const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$chunk$2d$TAJI6TAE$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["HttpClient"]({
            baseUrl: configOrRequester.url,
            retry: configOrRequester.retry,
            headers: {
                authorization: `Bearer ${configOrRequester.token}`
            },
            agent: configOrRequester.agent,
            responseEncoding: configOrRequester.responseEncoding,
            cache: configOrRequester.cache ?? "no-store",
            signal: configOrRequester.signal,
            keepAlive: configOrRequester.keepAlive,
            readYourWrites: configOrRequester.readYourWrites
        });
        super(client, {
            automaticDeserialization: configOrRequester.automaticDeserialization,
            enableTelemetry: !process.env.UPSTASH_DISABLE_TELEMETRY,
            latencyLogging: configOrRequester.latencyLogging,
            enableAutoPipelining: configOrRequester.enableAutoPipelining
        });
        this.addTelemetry({
            runtime: // @ts-expect-error to silence compiler
            typeof ("TURBOPACK compile-time value", "edge-runtime") === "string" ? "edge-light" : `node@${process.version}`,
            platform: process.env.UPSTASH_CONSOLE ? "console" : process.env.VERCEL ? "vercel" : process.env.AWS_REGION ? "aws" : "unknown",
            sdk: `@upstash/redis@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$chunk$2d$TAJI6TAE$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["VERSION"]}`
        });
        if (this.enableAutoPipelining) {
            return this.autoPipeline();
        }
    }
    /**
   * Create a new Upstash Redis instance from environment variables.
   *
   * Use this to automatically load connection secrets from your environment
   * variables. For instance when using the Vercel integration.
   *
   * This tries to load connection details from your environment using `process.env`:
   * - URL: `UPSTASH_REDIS_REST_URL` or fallback to `KV_REST_API_URL`
   * - Token: `UPSTASH_REDIS_REST_TOKEN` or fallback to `KV_REST_API_TOKEN`
   *
   * The fallback variables provide compatibility with Vercel KV and other platforms
   * that may use different naming conventions.
   */ static fromEnv(config) {
        if (process.env === void 0) {
            throw new TypeError('[Upstash Redis] Unable to get environment variables, `process.env` is undefined. If you are deploying to cloudflare, please import from "@upstash/redis/cloudflare" instead');
        }
        const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
        if (!url) {
            console.warn("[Upstash Redis] Unable to find environment variable: `UPSTASH_REDIS_REST_URL`");
        }
        const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
        if (!token) {
            console.warn("[Upstash Redis] Unable to find environment variable: `UPSTASH_REDIS_REST_TOKEN`");
        }
        return new _Redis({
            ...config,
            url,
            token
        });
    }
};
;

})()),
"[project]/node_modules/@upstash/redis/nodejs.mjs [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$chunk$2d$TAJI6TAE$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@upstash/redis/chunk-TAJI6TAE.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@upstash/redis/nodejs.mjs [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@vercel/kv/dist/index.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

// src/index.ts
__turbopack_esm__({
    "VercelKV": ()=>VercelKV,
    "createClient": ()=>createClient,
    "default": ()=>src_default,
    "kv": ()=>kv
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@upstash/redis/nodejs.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@upstash/redis/nodejs.mjs [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _kv = null;
process.env.UPSTASH_DISABLE_TELEMETRY = "1";
var VercelKV = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"] {
    // This API is based on https://github.com/redis/node-redis#scan-iterator which is not supported in @upstash/redis
    /**
   * Same as `scan` but returns an AsyncIterator to allow iteration via `for await`.
   */ async *scanIterator(options) {
        let cursor = 0;
        let keys;
        do {
            [cursor, keys] = await this.scan(cursor, options);
            for (const key of keys){
                yield key;
            }
        }while (cursor !== 0)
    }
    /**
   * Same as `hscan` but returns an AsyncIterator to allow iteration via `for await`.
   */ async *hscanIterator(key, options) {
        let cursor = 0;
        let items;
        do {
            [cursor, items] = await this.hscan(key, cursor, options);
            for (const item of items){
                yield item;
            }
        }while (cursor !== 0)
    }
    /**
   * Same as `sscan` but returns an AsyncIterator to allow iteration via `for await`.
   */ async *sscanIterator(key, options) {
        let cursor = 0;
        let items;
        do {
            [cursor, items] = await this.sscan(key, cursor, options);
            for (const item of items){
                yield item;
            }
        }while (cursor !== 0)
    }
    /**
   * Same as `zscan` but returns an AsyncIterator to allow iteration via `for await`.
   */ async *zscanIterator(key, options) {
        let cursor = 0;
        let items;
        do {
            [cursor, items] = await this.zscan(key, cursor, options);
            for (const item of items){
                yield item;
            }
        }while (cursor !== 0)
    }
};
function createClient(config) {
    return new VercelKV({
        // The Next.js team recommends no value or `default` for fetch requests's `cache` option
        // upstash/redis defaults to `no-store`, so we enforce `default`
        cache: "default",
        enableAutoPipelining: true,
        ...config
    });
}
var src_default = new Proxy({}, {
    get (target, prop, receiver) {
        if (prop === "then" || prop === "parse") {
            return Reflect.get(target, prop, receiver);
        }
        if (!_kv) {
            if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
                throw new Error("@vercel/kv: Missing required environment variables KV_REST_API_URL and KV_REST_API_TOKEN");
            }
            console.warn('\x1B[33m"The default export has been moved to a named export and it will be removed in version 1, change to import { kv }\x1B[0m"');
            _kv = createClient({
                url: process.env.KV_REST_API_URL,
                token: process.env.KV_REST_API_TOKEN
            });
        }
        return Reflect.get(_kv, prop);
    }
});
var kv = new Proxy({}, {
    get (target, prop) {
        if (!_kv) {
            if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
                throw new Error("@vercel/kv: Missing required environment variables KV_REST_API_URL and KV_REST_API_TOKEN");
            }
            _kv = createClient({
                url: process.env.KV_REST_API_URL,
                token: process.env.KV_REST_API_TOKEN
            });
        }
        return Reflect.get(_kv, prop);
    }
});
;
 //# sourceMappingURL=index.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/image-response.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * @deprecated ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead.
 * Migration with codemods: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import
 */ __turbopack_esm__({
    "ImageResponse": ()=>ImageResponse
});
function ImageResponse() {
    throw new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead');
} //# sourceMappingURL=image-response.js.map

})()),
"[project]/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    var i = {
        226: function(i, e) {
            (function(o, a) {
                "use strict";
                var r = "1.0.35", t = "", n = "?", s = "function", b = "undefined", w = "object", l = "string", d = "major", c = "model", u = "name", p = "type", m = "vendor", f = "version", h = "architecture", v = "console", g = "mobile", k = "tablet", x = "smarttv", _ = "wearable", y = "embedded", q = 350;
                var T = "Amazon", S = "Apple", z = "ASUS", N = "BlackBerry", A = "Browser", C = "Chrome", E = "Edge", O = "Firefox", U = "Google", j = "Huawei", P = "LG", R = "Microsoft", M = "Motorola", B = "Opera", V = "Samsung", D = "Sharp", I = "Sony", W = "Viera", F = "Xiaomi", G = "Zebra", H = "Facebook", L = "Chromium OS", Z = "Mac OS";
                var extend = function(i, e) {
                    var o = {};
                    for(var a in i){
                        if (e[a] && e[a].length % 2 === 0) {
                            o[a] = e[a].concat(i[a]);
                        } else {
                            o[a] = i[a];
                        }
                    }
                    return o;
                }, enumerize = function(i) {
                    var e = {};
                    for(var o = 0; o < i.length; o++){
                        e[i[o].toUpperCase()] = i[o];
                    }
                    return e;
                }, has = function(i, e) {
                    return typeof i === l ? lowerize(e).indexOf(lowerize(i)) !== -1 : false;
                }, lowerize = function(i) {
                    return i.toLowerCase();
                }, majorize = function(i) {
                    return typeof i === l ? i.replace(/[^\d\.]/g, t).split(".")[0] : a;
                }, trim = function(i, e) {
                    if (typeof i === l) {
                        i = i.replace(/^\s\s*/, t);
                        return typeof e === b ? i : i.substring(0, q);
                    }
                };
                var rgxMapper = function(i, e) {
                    var o = 0, r, t, n, b, l, d;
                    while(o < e.length && !l){
                        var c = e[o], u = e[o + 1];
                        r = t = 0;
                        while(r < c.length && !l){
                            if (!c[r]) {
                                break;
                            }
                            l = c[r++].exec(i);
                            if (!!l) {
                                for(n = 0; n < u.length; n++){
                                    d = l[++t];
                                    b = u[n];
                                    if (typeof b === w && b.length > 0) {
                                        if (b.length === 2) {
                                            if (typeof b[1] == s) {
                                                this[b[0]] = b[1].call(this, d);
                                            } else {
                                                this[b[0]] = b[1];
                                            }
                                        } else if (b.length === 3) {
                                            if (typeof b[1] === s && !(b[1].exec && b[1].test)) {
                                                this[b[0]] = d ? b[1].call(this, d, b[2]) : a;
                                            } else {
                                                this[b[0]] = d ? d.replace(b[1], b[2]) : a;
                                            }
                                        } else if (b.length === 4) {
                                            this[b[0]] = d ? b[3].call(this, d.replace(b[1], b[2])) : a;
                                        }
                                    } else {
                                        this[b] = d ? d : a;
                                    }
                                }
                            }
                        }
                        o += 2;
                    }
                }, strMapper = function(i, e) {
                    for(var o in e){
                        if (typeof e[o] === w && e[o].length > 0) {
                            for(var r = 0; r < e[o].length; r++){
                                if (has(e[o][r], i)) {
                                    return o === n ? a : o;
                                }
                            }
                        } else if (has(e[o], i)) {
                            return o === n ? a : o;
                        }
                    }
                    return i;
                };
                var $ = {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }, X = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: [
                        "NT 5.1",
                        "NT 5.2"
                    ],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: [
                        "NT 6.4",
                        "NT 10.0"
                    ],
                    RT: "ARM"
                };
                var K = {
                    browser: [
                        [
                            /\b(?:crmo|crios)\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Chrome"
                            ]
                        ],
                        [
                            /edg(?:e|ios|a)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Edge"
                            ]
                        ],
                        [
                            /(opera mini)\/([-\w\.]+)/i,
                            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /opios[\/ ]+([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Mini"
                            ]
                        ],
                        [
                            /\bopr\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B
                            ]
                        ],
                        [
                            /(kindle)\/([\w\.]+)/i,
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                            /(?:ms|\()(ie) ([\w\.]+)/i,
                            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                            /(heytap|ovi)browser\/([\d\.]+)/i,
                            /(weibo)__([\d\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "UC" + A
                            ]
                        ],
                        [
                            /microm.+\bqbcore\/([\w\.]+)/i,
                            /\bqbcore\/([\w\.]+).+microm/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat(Win) Desktop"
                            ]
                        ],
                        [
                            /micromessenger\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat"
                            ]
                        ],
                        [
                            /konqueror\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Konqueror"
                            ]
                        ],
                        [
                            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
                        ],
                        [
                            f,
                            [
                                u,
                                "IE"
                            ]
                        ],
                        [
                            /ya(?:search)?browser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Yandex"
                            ]
                        ],
                        [
                            /(avast|avg)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 Secure " + A
                            ],
                            f
                        ],
                        [
                            /\bfocus\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Focus"
                            ]
                        ],
                        [
                            /\bopt\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Touch"
                            ]
                        ],
                        [
                            /coc_coc\w+\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Coc Coc"
                            ]
                        ],
                        [
                            /dolfin\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Dolphin"
                            ]
                        ],
                        [
                            /coast\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Coast"
                            ]
                        ],
                        [
                            /miuibrowser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "MIUI " + A
                            ]
                        ],
                        [
                            /fxios\/([-\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O
                            ]
                        ],
                        [
                            /\bqihu|(qi?ho?o?|360)browser/i
                        ],
                        [
                            [
                                u,
                                "360 " + A
                            ]
                        ],
                        [
                            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 " + A
                            ],
                            f
                        ],
                        [
                            /(comodo_dragon)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /_/g,
                                " "
                            ],
                            f
                        ],
                        [
                            /(electron)\/([\w\.]+) safari/i,
                            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(metasr)[\/ ]?([\w\.]+)/i,
                            /(lbbrowser)/i,
                            /\[(linkedin)app\]/i
                        ],
                        [
                            u
                        ],
                        [
                            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                        ],
                        [
                            [
                                u,
                                H
                            ],
                            f
                        ],
                        [
                            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                            /safari (line)\/([\w\.]+)/i,
                            /\b(line)\/([\w\.]+)\/iab/i,
                            /(chromium|instagram)[\/ ]([-\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\bgsa\/([\w\.]+) .*safari\//i
                        ],
                        [
                            f,
                            [
                                u,
                                "GSA"
                            ]
                        ],
                        [
                            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "TikTok"
                            ]
                        ],
                        [
                            /headlesschrome(?:\/([\w\.]+)| )/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + " Headless"
                            ]
                        ],
                        [
                            / wv\).+(chrome)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                C + " WebView"
                            ],
                            f
                        ],
                        [
                            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Android " + A
                            ]
                        ],
                        [
                            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Mobile Safari"
                            ]
                        ],
                        [
                            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                $
                            ]
                        ],
                        [
                            /(webkit|khtml)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(navigator|netscape\d?)\/([-\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Netscape"
                            ],
                            f
                        ],
                        [
                            /mobile vr; rv:([\w\.]+)\).+firefox/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Reality"
                            ]
                        ],
                        [
                            /ekiohf.+(flow)\/([\w\.]+)/i,
                            /(swiftfox)/i,
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                            /(firefox)\/([\w\.]+)/i,
                            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                            /(links) \(([\w\.]+)/i,
                            /panasonic;(viera)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(cobalt)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                /master.|lts./,
                                ""
                            ]
                        ]
                    ],
                    cpu: [
                        [
                            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "amd64"
                            ]
                        ],
                        [
                            /(ia32(?=;))/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ],
                        [
                            /((?:i[346]|x)86)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "ia32"
                            ]
                        ],
                        [
                            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
                        ],
                        [
                            [
                                h,
                                "arm64"
                            ]
                        ],
                        [
                            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
                        ],
                        [
                            [
                                h,
                                "armhf"
                            ]
                        ],
                        [
                            /windows (ce|mobile); ppc;/i
                        ],
                        [
                            [
                                h,
                                "arm"
                            ]
                        ],
                        [
                            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
                        ],
                        [
                            [
                                h,
                                /ower/,
                                t,
                                lowerize
                            ]
                        ],
                        [
                            /(sun4\w)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "sparc"
                            ]
                        ],
                        [
                            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ]
                    ],
                    device: [
                        [
                            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                            /samsung[- ]([-\w]+)/i,
                            /sec-(sgh\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\((ipad);[-\w\),; ]+apple/i,
                            /applecoremedia\/[\w\.]+ \((ipad)/i,
                            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(macintosh);/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ]
                        ],
                        [
                            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:huawei|honor)([-\w ]+)[;\)]/i,
                            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(poco[\w ]+)(?: bui|\))/i,
                            /\b; (\w+) build\/hm\1/i,
                            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /; (\w+) bui.+ oppo/i,
                            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OPPO"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /vivo (\w+)(?: bui|\))/i,
                            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Vivo"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rmx[12]\d{3})(?: bui|;|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Realme"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                            /\bmot(?:orola)?[- ](\w*)/i,
                            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                            /\blg-?([\d\w]+) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(ideatab[-\w ]+)/i,
                            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Lenovo"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:maemo|nokia).*(n900|lumia \d+)/i,
                            /nokia[-_ ]?([-\w\.]*)/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                "Nokia"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(pixel c)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /sony tablet [ps]/i,
                            /\b(?:sony)?sgp\w+(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                "Xperia Tablet"
                            ],
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (kb2005|in20[12]5|be20[12][59])\b/i,
                            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OnePlus"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(alexa)webm/i,
                            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                            /(kf[a-z]+)( bui|\)).+silk\//i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
                        ],
                        [
                            [
                                c,
                                /(.+)/g,
                                "Fire Phone $1"
                            ],
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(playbook);[-\w\),; ]+(rim)/i
                        ],
                        [
                            c,
                            m,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:bb[a-f]|st[hv])100-\d)/i,
                            /\(bb10; (\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                N
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(nexus 9)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "HTC"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                        ],
                        [
                            m,
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Acer"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (m[1-5] note) bui/i,
                            /\bmz-([-\w]{2,})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Meizu"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                            /(hp) ([\w ]+\w)/i,
                            /(asus)-?(\w+)/i,
                            /(microsoft); (lumia[\w ]+)/i,
                            /(lenovo)[-_ ]?([-\w]+)/i,
                            /(jolla)/i,
                            /(oppo) ?([\w ]+) bui/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kobo)\s(ereader|touch)/i,
                            /(archos) (gamepad2?)/i,
                            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                            /(kindle)\/([\w\.]+)/i,
                            /(nook)[\w ]+build\/(\w+)/i,
                            /(dell) (strea[kpr\d ]*[\dko])/i,
                            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                            /(trinity)[- ]*(t\d{3}) bui/i,
                            /(gigaset)[- ]+(q\w{1,9}) bui/i,
                            /(vodafone) ([\w ]+)(?:\)| bui)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(surface duo)/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid [\d\.]+; (fp\du?)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Fairphone"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(u304aa)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "AT&T"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\bsie-(\w*)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Siemens"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rct\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "RCA"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(venue[\d ]{2,7}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Dell"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(q(?:mv|ta)\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Verizon"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Barnes & Noble"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(tm\d{3}\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NuVision"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(k88) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(nx\d{3}j) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(gen\d{3}) b.+49h/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(zur\d{3}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((zeki)?tb.*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Zeki"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b([yr]\d{2}) b/i,
                            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
                        ],
                        [
                            [
                                m,
                                "Dragon Touch"
                            ],
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(ns-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Insignia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((nxa|next)-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NextBook"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
                        ],
                        [
                            [
                                m,
                                "Voice"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(lvtel\-)?(v1[12]) b/i
                        ],
                        [
                            [
                                m,
                                "LvTel"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(ph-1) /i
                        ],
                        [
                            c,
                            [
                                m,
                                "Essential"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(v(100md|700na|7011|917g).*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Envizen"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(trio[-\w\. ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "MachSpeed"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\btu_(1491) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Rotor"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(shield[\w ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(sprint) (\w+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kin\.[onetw]{3})/i
                        ],
                        [
                            [
                                c,
                                /\./g,
                                " "
                            ],
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /smart-tv.+(samsung)/i
                        ],
                        [
                            m,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /hbbtv.+maple;(\d+)/i
                        ],
                        [
                            [
                                c,
                                /^/,
                                "SmartTV"
                            ],
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                        ],
                        [
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(apple) ?tv/i
                        ],
                        [
                            m,
                            [
                                c,
                                S + " TV"
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /crkey/i
                        ],
                        [
                            [
                                c,
                                C + "cast"
                            ],
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /droid.+aft(\w)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\(dtv[\);].+(aquos)/i,
                            /(aquos-tv[\w ]+)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(bravia[\w ]+)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(mitv-\w{5}) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /Hbbtv.*(technisat) (.*);/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                        ],
                        [
                            [
                                m,
                                trim
                            ],
                            [
                                c,
                                trim
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
                        ],
                        [
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(ouya)/i,
                            /(nintendo) ([wids3utch]+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /droid.+; (shield) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /(playstation [345portablevi]+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /((pebble))app/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (glass) \d/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (wt63?0{2,3})\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(quest( 2| pro)?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                H
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
                        ],
                        [
                            m,
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /(aeobc)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
                        ],
                        [
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                        ],
                        [
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(android[-\w\. ]{0,9});.+buil/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Generic"
                            ]
                        ]
                    ],
                    engine: [
                        [
                            /windows.+ edge\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                E + "HTML"
                            ]
                        ],
                        [
                            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Blink"
                            ]
                        ],
                        [
                            /(presto)\/([\w\.]+)/i,
                            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                            /ekioh(flow)\/([\w\.]+)/i,
                            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                            /(icab)[\/ ]([23]\.[\d\.]+)/i,
                            /\b(libweb)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /rv\:([\w\.]{1,9})\b.+(gecko)/i
                        ],
                        [
                            f,
                            u
                        ]
                    ],
                    os: [
                        [
                            /microsoft (windows) (vista|xp)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(windows) nt 6\.2; (arm)/i,
                            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Windows"
                            ],
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                            /ios;fbsv\/([\d\.]+)/i,
                            /cfnetwork\/.+darwin/i
                        ],
                        [
                            [
                                f,
                                /_/g,
                                "."
                            ],
                            [
                                u,
                                "iOS"
                            ]
                        ],
                        [
                            /(mac os x) ?([\w\. ]*)/i,
                            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
                        ],
                        [
                            [
                                u,
                                Z
                            ],
                            [
                                f,
                                /_/g,
                                "."
                            ]
                        ],
                        [
                            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                            /(blackberry)\w*\/([\w\.]*)/i,
                            /(tizen|kaios)[\/ ]([\w\.]+)/i,
                            /\((series40);/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\(bb(10);/i
                        ],
                        [
                            f,
                            [
                                u,
                                N
                            ]
                        ],
                        [
                            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Symbian"
                            ]
                        ],
                        [
                            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " OS"
                            ]
                        ],
                        [
                            /web0s;.+rt(tv)/i,
                            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "webOS"
                            ]
                        ],
                        [
                            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "watchOS"
                            ]
                        ],
                        [
                            /crkey\/([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + "cast"
                            ]
                        ],
                        [
                            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
                        ],
                        [
                            [
                                u,
                                L
                            ],
                            f
                        ],
                        [
                            /panasonic;(viera)/i,
                            /(netrange)mmh/i,
                            /(nettv)\/(\d+\.[\w\.]+)/i,
                            /(nintendo|playstation) ([wids345portablevuch]+)/i,
                            /(xbox); +xbox ([^\);]+)/i,
                            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                            /(mint)[\/\(\) ]?(\w*)/i,
                            /(mageia|vectorlinux)[; ]/i,
                            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                            /(hurd|linux) ?([\w\.]*)/i,
                            /(gnu) ?([\w\.]*)/i,
                            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                            /(haiku) (\w+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(sunos) ?([\w\.\d]*)/i
                        ],
                        [
                            [
                                u,
                                "Solaris"
                            ],
                            f
                        ],
                        [
                            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                            /(unix) ?([\w\.]*)/i
                        ],
                        [
                            u,
                            f
                        ]
                    ]
                };
                var UAParser = function(i, e) {
                    if (typeof i === w) {
                        e = i;
                        i = a;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(i, e).getResult();
                    }
                    var r = typeof o !== b && o.navigator ? o.navigator : a;
                    var n = i || (r && r.userAgent ? r.userAgent : t);
                    var v = r && r.userAgentData ? r.userAgentData : a;
                    var x = e ? extend(K, e) : K;
                    var _ = r && r.userAgent == n;
                    this.getBrowser = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.browser);
                        i[d] = majorize(i[f]);
                        if (_ && r && r.brave && typeof r.brave.isBrave == s) {
                            i[u] = "Brave";
                        }
                        return i;
                    };
                    this.getCPU = function() {
                        var i = {};
                        i[h] = a;
                        rgxMapper.call(i, n, x.cpu);
                        return i;
                    };
                    this.getDevice = function() {
                        var i = {};
                        i[m] = a;
                        i[c] = a;
                        i[p] = a;
                        rgxMapper.call(i, n, x.device);
                        if (_ && !i[p] && v && v.mobile) {
                            i[p] = g;
                        }
                        if (_ && i[c] == "Macintosh" && r && typeof r.standalone !== b && r.maxTouchPoints && r.maxTouchPoints > 2) {
                            i[c] = "iPad";
                            i[p] = k;
                        }
                        return i;
                    };
                    this.getEngine = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.engine);
                        return i;
                    };
                    this.getOS = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.os);
                        if (_ && !i[u] && v && v.platform != "Unknown") {
                            i[u] = v.platform.replace(/chrome os/i, L).replace(/macos/i, Z);
                        }
                        return i;
                    };
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function() {
                        return n;
                    };
                    this.setUA = function(i) {
                        n = typeof i === l && i.length > q ? trim(i, q) : i;
                        return this;
                    };
                    this.setUA(n);
                    return this;
                };
                UAParser.VERSION = r;
                UAParser.BROWSER = enumerize([
                    u,
                    f,
                    d
                ]);
                UAParser.CPU = enumerize([
                    h
                ]);
                UAParser.DEVICE = enumerize([
                    c,
                    m,
                    p,
                    v,
                    g,
                    x,
                    k,
                    _,
                    y
                ]);
                UAParser.ENGINE = UAParser.OS = enumerize([
                    u,
                    f
                ]);
                if (typeof e !== b) {
                    if ("object" !== b && i.exports) {
                        e = i.exports = UAParser;
                    }
                    e.UAParser = UAParser;
                } else {
                    if (typeof define === s && define.amd) {
                        ((r)=>r !== undefined && __turbopack_export_value__(r))(function() {
                            return UAParser;
                        }(__turbopack_require__, exports, module));
                    } else if (typeof o !== b) {
                        o.UAParser = UAParser;
                    }
                }
                var Q = typeof o !== b && (o.jQuery || o.Zepto);
                if (Q && !Q.ua) {
                    var Y = new UAParser;
                    Q.ua = Y.getResult();
                    Q.ua.get = function() {
                        return Y.getUA();
                    };
                    Q.ua.set = function(i) {
                        Y.setUA(i);
                        var e = Y.getResult();
                        for(var o in e){
                            Q.ua[o] = e[o];
                        }
                    };
                }
            })(typeof window === "object" ? window : this);
        }
    };
    var e = {};
    function __nccwpck_require__(o) {
        var a = e[o];
        if (a !== undefined) {
            return a.exports;
        }
        var r = e[o] = {
            exports: {}
        };
        var t = true;
        try {
            i[o].call(r.exports, r, r.exports, __nccwpck_require__);
            t = false;
        } finally{
            if (t) delete e[o];
        }
        return r.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var o = __nccwpck_require__(226);
    module.exports = o;
})();

}.call(this) }),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/user-agent.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isBot": ()=>isBot,
    "userAgent": ()=>userAgent,
    "userAgentFromString": ()=>userAgentFromString
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$ua$2d$parser$2d$js$2f$ua$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function isBot(input) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
}
function userAgentFromString(input) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$ua$2d$parser$2d$js$2f$ua$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input),
        isBot: input === undefined ? false : isBot(input)
    };
}
function userAgent({ headers }) {
    return userAgentFromString(headers.get("user-agent") || undefined);
} //# sourceMappingURL=user-agent.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/url-pattern.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "URLPattern": ()=>GlobalURLPattern
});
const GlobalURLPattern = typeof URLPattern === "undefined" ? undefined : URLPattern;
;
 //# sourceMappingURL=url-pattern.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Alias index file of next/server for edge runtime for tree-shaking purpose
__turbopack_esm__({});
;
;
;
;
;
 //# sourceMappingURL=index.js.map

})()),
"[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$image$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/image-response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$user$2d$agent$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/user-agent.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$url$2d$pattern$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/url-pattern.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
 //# sourceMappingURL=server.js.map

})()),
"[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => \"[project]/middleware.ts [middleware] (ecmascript)\" } [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>nHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/middleware.ts [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const mod = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__
};
const handler = mod.middleware || mod.default;
const page = "/middleware";
if (typeof handler !== "function") {
    throw new Error(`The Middleware "${page}" must export a \`middleware\` or a \`default\` function`);
}
function nHandler(opts) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["adapter"])({
        ...opts,
        page,
        handler
    });
} //# sourceMappingURL=middleware.js.map

})()),
"[project]/edge-wrapper.js { MODULE => \"[project]/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => \\\"[project]/middleware.ts [middleware] (ecmascript)\\\" } [middleware] (ecmascript)\" } [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

self._ENTRIES ||= {};
self._ENTRIES["middleware_middleware"] = Promise.resolve().then(()=>__turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => "[project]/middleware.ts [middleware] (ecmascript)" } [middleware] (ecmascript)'));

}.call(this) }),
}]);

//# sourceMappingURL=_e0bc4b._.js.map
module.exports = {

"[project]/lib/api-errors.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "createRateLimitResponse": ()=>createRateLimitResponse,
    "handleAPIError": ()=>handleAPIError,
    "isAccessDeniedError": ()=>isAccessDeniedError,
    "isOverloadedError": ()=>isOverloadedError,
    "isRateLimitError": ()=>isRateLimitError
});
function isRateLimitError(error) {
    return error && (error.statusCode === 429 || error.message.toLowerCase().includes('limit') || error.message.toLowerCase().includes('billing'));
}
function isOverloadedError(error) {
    return error && (error.statusCode === 529 || error.statusCode === 503);
}
function isAccessDeniedError(error) {
    return error && (error.statusCode === 403 || error.statusCode === 401);
}
function handleAPIError(error, context) {
    // Log the error for debugging
    console.error('API Error:', error);
    if (isRateLimitError(error)) {
        const message = context?.hasOwnApiKey ? 'The provider is currently unavailable due to request limit.' : 'The provider is currently unavailable due to request limit. Try using your own API key.';
        return new Response(message, {
            status: 429
        });
    }
    if (isOverloadedError(error)) {
        return new Response('The provider is currently unavailable. Please try again later.', {
            status: 529
        });
    }
    if (isAccessDeniedError(error)) {
        return new Response('Access denied. Please make sure your API key is valid.', {
            status: 403
        });
    }
    // Generic error handling
    return new Response('An unexpected error has occurred. Please try again later.', {
        status: 500
    });
}
function createRateLimitResponse(limit) {
    return new Response('You have reached your request limit for the day.', {
        status: 429,
        headers: {
            'X-RateLimit-Limit': limit.amount.toString(),
            'X-RateLimit-Remaining': limit.remaining.toString(),
            'X-RateLimit-Reset': limit.reset.toString()
        }
    });
}

})()),
"[project]/lib/models.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getDefaultModelParams": ()=>getDefaultModelParams,
    "getModelClient": ()=>getModelClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/anthropic/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$fireworks$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/fireworks/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2d$vertex$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/google-vertex/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$mistral$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/mistral/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ollama$2d$ai$2d$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ollama-ai-provider/dist/index.mjs [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
function getModelClient(model, config) {
    const { id: modelNameString, providerId } = model;
    const { apiKey, baseURL } = config;
    const providerConfigs = {
        anthropic: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAnthropic"])({
                apiKey,
                baseURL
            })(modelNameString),
        openai: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOpenAI"])({
                apiKey,
                baseURL
            })(modelNameString),
        google: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGoogleGenerativeAI"])({
                apiKey,
                baseURL
            })(modelNameString),
        mistral: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$mistral$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createMistral"])({
                apiKey,
                baseURL
            })(modelNameString),
        groq: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOpenAI"])({
                apiKey: apiKey || process.env.GROQ_API_KEY,
                baseURL: baseURL || 'https://api.groq.com/openai/v1'
            })(modelNameString),
        togetherai: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOpenAI"])({
                apiKey: apiKey || process.env.TOGETHER_API_KEY,
                baseURL: baseURL || 'https://api.together.xyz/v1'
            })(modelNameString),
        ollama: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ollama$2d$ai$2d$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOllama"])({
                baseURL
            })(modelNameString),
        fireworks: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$fireworks$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createFireworks"])({
                apiKey: apiKey || process.env.FIREWORKS_API_KEY,
                baseURL: baseURL || 'https://api.fireworks.ai/inference/v1'
            })(modelNameString),
        vertex: ()=>{
            const vertexCredentials = process.env.GOOGLE_VERTEX_CREDENTIALS;
            // Handle both API key and JSON credentials
            if (!vertexCredentials) {
                // Fallback to Google AI SDK if no Vertex credentials
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGoogleGenerativeAI"])({
                    apiKey: apiKey || process.env.GOOGLE_AI_API_KEY
                })(modelNameString);
            }
            // Try to parse as JSON first (service account credentials)
            try {
                const credentials = JSON.parse(vertexCredentials);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2d$vertex$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createVertex"])({
                    googleAuthOptions: {
                        credentials
                    }
                })(modelNameString);
            } catch  {
                // If not JSON, treat as API key and use Google AI SDK instead
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGoogleGenerativeAI"])({
                    apiKey: vertexCredentials || apiKey || process.env.GOOGLE_AI_API_KEY
                })(modelNameString);
            }
        },
        xai: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOpenAI"])({
                apiKey: apiKey || process.env.XAI_API_KEY,
                baseURL: baseURL || 'https://api.x.ai/v1'
            })(modelNameString),
        deepseek: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOpenAI"])({
                apiKey: apiKey || process.env.DEEPSEEK_API_KEY,
                baseURL: baseURL || 'https://api.deepseek.com/v1'
            })(modelNameString)
    };
    const createClient = providerConfigs[providerId];
    if (!createClient) {
        throw new Error(`Unsupported provider: ${providerId}`);
    }
    return createClient();
}
function getDefaultModelParams(model) {
    // Return default parameters for the model
    // This can be customized per provider/model if needed
    return {
        temperature: 0.7,
        maxTokens: 4096
    };
}

})()),
"[project]/lib/templates.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"code-interpreter-v1\":{\"name\":\"Python data analyst\",\"lib\":[\"python\",\"jupyter\",\"numpy\",\"pandas\",\"matplotlib\",\"seaborn\",\"plotly\"],\"file\":\"script.py\",\"instructions\":\"Runs code as a Jupyter notebook cell. Strong data analysis angle. Can use complex visualisation to explain results.\",\"port\":null},\"nextjs-developer\":{\"name\":\"Next.js developer\",\"lib\":[\"nextjs@14.2.5\",\"typescript\",\"@types/node\",\"@types/react\",\"@types/react-dom\",\"postcss\",\"tailwindcss\",\"shadcn\"],\"file\":\"pages/index.tsx\",\"instructions\":\"A Next.js 14+ app that reloads automatically. Using the pages router.\",\"port\":3000},\"vue-developer\":{\"name\":\"Vue.js developer\",\"lib\":[\"vue@latest\",\"nuxt@3.13.0\",\"tailwindcss\"],\"file\":\"app.vue\",\"instructions\":\"A Vue.js 3+ app that reloads automatically. Only when asked specifically for a Vue app.\",\"port\":3000},\"streamlit-developer\":{\"name\":\"Streamlit developer\",\"lib\":[\"streamlit\",\"pandas\",\"numpy\",\"matplotlib\",\"request\",\"seaborn\",\"plotly\"],\"file\":\"app.py\",\"instructions\":\"A streamlit app that reloads automatically.\",\"port\":8501},\"gradio-developer\":{\"name\":\"Gradio developer\",\"lib\":[\"gradio\",\"pandas\",\"numpy\",\"matplotlib\",\"request\",\"seaborn\",\"plotly\"],\"file\":\"app.py\",\"instructions\":\"A gradio app. Gradio Blocks/Interface should be called demo.\",\"port\":7860}}"));
})()),
"[project]/lib/templates.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "templatesToPrompt": ()=>templatesToPrompt
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$json__$28$json$29$__ = __turbopack_import__("[project]/lib/templates.json (json)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$json__$28$json$29$__["default"];
function templatesToPrompt(templates) {
    return `${Object.entries(templates).map(([id, t], index)=>`${index + 1}. ${id}: "${t.instructions}". File: ${t.file || 'none'}. Dependencies installed: ${t.lib ? t.lib.join(', ') : 'none'}. Port: ${t.port || 'none'}.`).join('\n')}`;
}

})()),
"[project]/lib/prompt.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "toPrompt": ()=>toPrompt
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/templates.ts [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function toPrompt(template) {
    return `
    You are a skilled software engineer.
    You do not make mistakes.
    Generate an fragment.
    You can install additional dependencies.
    Do not touch project dependencies files like package.json, package-lock.json, requirements.txt, etc.
    Do not wrap code in backticks.
    Always break the lines correctly.
    You can use one of the following templates:
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["templatesToPrompt"])(template)}
  `;
}

})()),
"[project]/lib/ratelimit.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ratelimit
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$ratelimit$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@upstash/ratelimit/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/kv/dist/index.js [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function ratelimit(key, maxRequests, window) {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        const ratelimit = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$ratelimit$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Ratelimit"]({
            redis: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"],
            limiter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$ratelimit$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Ratelimit"].slidingWindow(maxRequests, window)
        });
        const { success, limit, reset, remaining } = await ratelimit.limit(`ratelimit_${key}`);
        if (!success) {
            return {
                amount: limit,
                reset,
                remaining
            };
        }
    }
}

})()),
"[project]/lib/schema.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "fragmentSchema": ()=>fragmentSchema,
    "morphEditSchema": ()=>morphEditSchema
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_import__("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fragmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    commentary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe(`Describe what you're about to do and the steps you want to take for generating the fragment in great detail.`),
    template: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Name of the template used to generate the fragment.'),
    // template_ready: z.boolean().describe('Detect if finished identifying the template.'),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Short title of the fragment. Max 3 words.'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Short description of the fragment. Max 1 sentence.'),
    additional_dependencies: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).describe('Additional dependencies required by the fragment. Do not include dependencies that are already included in the template.'),
    has_additional_dependencies: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().describe('Detect if additional dependencies that are not included in the template are required by the fragment.'),
    install_dependencies_command: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Command to install additional dependencies required by the fragment.'),
    // install_dependencies_ready: z.boolean().describe('Detect if finished identifying additional dependencies.'),
    port: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable().describe('Port number used by the resulted fragment. Null when no ports are exposed.'),
    file_path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Relative path to the file, including the file name.'),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Code generated by the fragment. Only runnable code is allowed.')
});
const morphEditSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    commentary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Explain what changes you are making and why'),
    instruction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('One line instruction on what the change is'),
    edit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("You should make it clear what the edit is, while also minimizing the unchanged code you write. When writing the edit, you should specify each edit in sequence, with the special comment // ... existing code ... to represent unchanged code in between edited lines. For example: // ... existing code ... FIRST_EDIT // ... existing code ... SECOND_EDIT // ... existing code ... THIRD_EDIT // ... existing code ... Be Lazy when outputting code, rely heavily on the exisitng code comments, but each edit should contain minimally sufficient context of unchanged lines around the code you're editing to resolve ambiguity. DO NOT omit spans of pre-existing code (or comments) without using the // ... existing code ... comment to indicate its absence. If you omit the existing code comment, the model may inadvertently delete these lines. If you plan on deleting a section, you must provide context before and after to delete it. If the initial code is ```code \\n Block 1 \\n Block 2 \\n Block 3 \\n code```, and you want to remove Block 2, you would output ```// ... existing code ... \\n Block 1 \\n  Block 3 \\n // ... existing code ...```. "),
    file_path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('Path to the file being edited')
});

})()),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "POST": ()=>POST,
    "maxDuration": ()=>maxDuration
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/api-errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/models.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/prompt.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/ratelimit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const maxDuration = 300;
const rateLimitMaxRequests = process.env.RATE_LIMIT_MAX_REQUESTS ? parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) : 10;
const ratelimitWindow = process.env.RATE_LIMIT_WINDOW ? process.env.RATE_LIMIT_WINDOW : '1d';
async function POST(req) {
    const { messages, userID, teamID, template, model, config } = await req.json();
    const limit = !config.apiKey ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(req.headers.get('x-forwarded-for'), rateLimitMaxRequests, ratelimitWindow) : false;
    if (limit) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRateLimitResponse"])(limit);
    }
    console.log('userID', userID);
    console.log('teamID', teamID);
    // console.log('template', template)
    console.log('model', model);
    // console.log('config', config)
    const { model: modelNameString, apiKey: modelApiKey, ...modelParams } = config;
    const modelClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getModelClient"])(model, config);
    try {
        const stream = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamObject"])({
            model: modelClient,
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fragmentSchema"],
            system: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toPrompt"])(template),
            messages,
            maxRetries: 0,
            ...modelParams
        });
        return stream.toTextStreamResponse();
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleAPIError"])(error, {
            hasOwnApiKey: !!config.apiKey
        });
    }
}

})()),

};

//# sourceMappingURL=_3ff85b._.js.map
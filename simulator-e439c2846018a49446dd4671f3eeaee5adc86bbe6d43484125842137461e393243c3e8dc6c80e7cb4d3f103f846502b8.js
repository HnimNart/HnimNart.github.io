let T=0,Y=`string`,V=1,Z=`Object`,R=`utf-8`,P=null,X=`number`,Q=`undefined`,a2=306,$=4,W=`function`,_=16,a3=564,N=Array,S=Error,a0=Object,a1=Promise,U=Uint8Array,O=undefined;var H=(async(a,b)=>{if(typeof Response===W&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===W){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var u=(a=>{const b=typeof a;if(b==X||b==`boolean`||a==P){return `${a}`};if(b==Y){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==P){return `Symbol`}else{return `Symbol(${b})`}};if(b==W){const b=a.name;if(typeof b==Y&&b.length>T){return `Function(${b})`}else{return `Function`}};if(N.isArray(a)){const b=a.length;let c=`[`;if(b>T){c+=u(a[T])};for(let d=V;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>V){d=c[V]}else{return toString.call(a)};if(d==Z){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return Z}};if(a instanceof S){return `${a.name}: ${a.message}\n${a.stack}`};return d});var A=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h7fd5e3bffe7fbd3c(b,c,k(d))});var J=((a,b)=>{});var E=((a,b)=>{a=a>>>T;return D().subarray(a/$,a/$+ b)});var w=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8c1d26b0d1ee66b0(b,c)});var k=(a=>{if(d===b.length)b.push(b.length+ V);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var z=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h74fb0699673edcad(b,c,k(d))});var M=(async(b)=>{if(a!==O)return a;if(typeof b===Q){b=new URL(`simulator-e439c2846018a49446dd4671f3eeaee5adc86bbe6d43484125842137461e393243c3e8dc6c80e7cb4d3f103f846502b8_bg.wasm`,import.meta.url)};const c=I();if(typeof b===Y||typeof Request===W&&b instanceof Request||typeof URL===W&&b instanceof URL){b=fetch(b)};J(c);const {instance:d,module:e}=await H(await b,c);return K(d,e)});function B(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var L=(b=>{if(a!==O)return a;const c=I();J(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return K(d,b)});var K=((b,c)=>{a=b.exports;M.__wbindgen_wasm_module=c;s=P;q=P;C=P;h=P;a.__wbindgen_start();return a});var r=(()=>{if(q===P||q.byteLength===T){q=new Int32Array(a.memory.buffer)};return q});var p=(a=>a===O||a===P);var c=(a=>b[a]);var I=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==V){b.a=T;return !0};const c=!1;return c});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===Y?e:O;var g=p(f)?T:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/$+ V]=h;r()[b/$+ T]=g});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===X?d:O;t()[a/8+ V]=p(e)?T:e;r()[a/$+ T]=!p(e)});b.wbg.__wbg_trace_113a411129582eba=((a,b)=>{console.trace(j(a,b))});b.wbg.__wbg_debug_975e75d6a98e7fa1=((a,b)=>{console.debug(j(a,b))});b.wbg.__wbg_info_914f65437df3ae09=((a,b)=>{console.info(j(a,b))});b.wbg.__wbg_warn_c32f95eaa37484b4=((a,b)=>{console.warn(j(a,b))});b.wbg.__wbg_error_5287ab77bfdcdbfd=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,V)}});b.wbg.__wbg_new_2135eb8c7b17573b=(()=>{const a=new S();return k(a)});b.wbg.__wbg_stack_5e4edbe5d1e14374=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==P;return d});b.wbg.__wbg_Window_7bd5d737b6110ed5=(a=>{const b=c(a).Window;return k(b)});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===O;return b});b.wbg.__wbg_WorkerGlobalScope_10e1fa12a09a520b=(a=>{const b=c(a).WorkerGlobalScope;return k(b)});b.wbg.__wbindgen_number_new=(a=>{const b=a;return k(b)});b.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===W;return b});b.wbg.__wbg_instanceof_Window_9029196b662bc42a=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_f7ace2b956f30a4f=(a=>{const b=c(a).document;return p(b)?T:k(b)});b.wbg.__wbg_location_56243dba507f472d=(a=>{const b=c(a).location;return k(b)});b.wbg.__wbg_navigator_7c9103698acde322=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_innerHeight_2dd06d8cf68f1d7d=function(){return B((a=>{const b=c(a).innerHeight;return k(b)}),arguments)};b.wbg.__wbg_devicePixelRatio_f9de7bddca0eaf20=(a=>{const b=c(a).devicePixelRatio;return b});b.wbg.__wbg_performance_2c295061c8b01e0b=(a=>{const b=c(a).performance;return p(b)?T:k(b)});b.wbg.__wbg_localStorage_dbac11bd189e9fa0=function(){return B((a=>{const b=c(a).localStorage;return p(b)?T:k(b)}),arguments)};b.wbg.__wbg_matchMedia_12ef69056e32d0b3=function(){return B(((a,b,d)=>{const e=c(a).matchMedia(j(b,d));return p(e)?T:k(e)}),arguments)};b.wbg.__wbg_open_7a2a86bf6285507d=function(){return B(((a,b,d,e,f)=>{const g=c(a).open(j(b,d),j(e,f));return p(g)?T:k(g)}),arguments)};b.wbg.__wbg_requestAnimationFrame_d082200514b6674d=function(){return B(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_clearInterval_080a47b47538d08c=((a,b)=>{c(a).clearInterval(b)});b.wbg.__wbg_setTimeout_eb1a0d116c26d9f6=function(){return B(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_body_674aec4c1c0910cd=(a=>{const b=c(a).body;return p(b)?T:k(b)});b.wbg.__wbg_createElement_4891554b28d3388b=function(){return B(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_getElementById_cc0e0d931b0d9a28=((a,b,d)=>{const e=c(a).getElementById(j(b,d));return p(e)?T:k(e)});b.wbg.__wbg_querySelectorAll_c03e8664a5a0f0c5=function(){return B(((a,b,d)=>{const e=c(a).querySelectorAll(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_setid_1984ee27e5075311=((a,b,d)=>{c(a).id=j(b,d)});b.wbg.__wbg_scrollLeft_ea915614eac6bbeb=(a=>{const b=c(a).scrollLeft;return b});b.wbg.__wbg_clientWidth_51ec21e3189f5656=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_09ec0b524d59c367=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_getBoundingClientRect_ac9db8cf97ca8083=(a=>{const b=c(a).getBoundingClientRect();return k(b)});b.wbg.__wbg_setAttribute_e7e80b478b7b8b2f=function(){return B(((a,b,d,e,f)=>{c(a).setAttribute(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_writeText_9c0cc5145d005509=((a,b,d)=>{const e=c(a).writeText(j(b,d));return k(e)});b.wbg.__wbg_data_03708a776af7d2f6=((b,d)=>{const e=c(d).data;var f=p(e)?T:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbg_length_dd2eb44022569c32=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_135f0a95f49ed3ff=((a,b)=>{const d=c(a)[b>>>T];return p(d)?T:k(d)});b.wbg.__wbg_getBindGroupLayout_20dc45d52b96fa42=((a,b)=>{const d=c(a).getBindGroupLayout(b>>>T);return k(d)});b.wbg.__wbg_getBindGroupLayout_dfc1b97f78c04beb=((a,b)=>{const d=c(a).getBindGroupLayout(b>>>T);return k(d)});b.wbg.__wbg_maxTextureDimension1D_4d1ddb46ed9dc470=(a=>{const b=c(a).maxTextureDimension1D;return b});b.wbg.__wbg_maxTextureDimension2D_37a46e61490c8297=(a=>{const b=c(a).maxTextureDimension2D;return b});b.wbg.__wbg_maxTextureDimension3D_7e3a97204d211743=(a=>{const b=c(a).maxTextureDimension3D;return b});b.wbg.__wbg_maxTextureArrayLayers_fee4db585706a5eb=(a=>{const b=c(a).maxTextureArrayLayers;return b});b.wbg.__wbg_maxBindGroups_dc8a5f97ba653c91=(a=>{const b=c(a).maxBindGroups;return b});b.wbg.__wbg_maxBindingsPerBindGroup_3d5ab311420be5df=(a=>{const b=c(a).maxBindingsPerBindGroup;return b});b.wbg.__wbg_maxDynamicUniformBuffersPerPipelineLayout_6b839b7dc97f34f0=(a=>{const b=c(a).maxDynamicUniformBuffersPerPipelineLayout;return b});b.wbg.__wbg_maxDynamicStorageBuffersPerPipelineLayout_5328cd2b9d884831=(a=>{const b=c(a).maxDynamicStorageBuffersPerPipelineLayout;return b});b.wbg.__wbg_maxSampledTexturesPerShaderStage_ac006b00cf776b4a=(a=>{const b=c(a).maxSampledTexturesPerShaderStage;return b});b.wbg.__wbg_maxSamplersPerShaderStage_dc092d6a272be20a=(a=>{const b=c(a).maxSamplersPerShaderStage;return b});b.wbg.__wbg_maxStorageBuffersPerShaderStage_dc5b58734b9ab932=(a=>{const b=c(a).maxStorageBuffersPerShaderStage;return b});b.wbg.__wbg_maxStorageTexturesPerShaderStage_2fec939cb0d5bbfd=(a=>{const b=c(a).maxStorageTexturesPerShaderStage;return b});b.wbg.__wbg_maxUniformBuffersPerShaderStage_b30d53cbf89caeae=(a=>{const b=c(a).maxUniformBuffersPerShaderStage;return b});b.wbg.__wbg_maxUniformBufferBindingSize_eec576e1342504b5=(a=>{const b=c(a).maxUniformBufferBindingSize;return b});b.wbg.__wbg_maxStorageBufferBindingSize_1ef0cc5e43dad09b=(a=>{const b=c(a).maxStorageBufferBindingSize;return b});b.wbg.__wbg_minUniformBufferOffsetAlignment_3af8c32faa30c5d8=(a=>{const b=c(a).minUniformBufferOffsetAlignment;return b});b.wbg.__wbg_minStorageBufferOffsetAlignment_766ef8ea8f9fe6e1=(a=>{const b=c(a).minStorageBufferOffsetAlignment;return b});b.wbg.__wbg_maxVertexBuffers_b4d31be9e3f93990=(a=>{const b=c(a).maxVertexBuffers;return b});b.wbg.__wbg_maxBufferSize_2d8398a691b9a8ce=(a=>{const b=c(a).maxBufferSize;return b});b.wbg.__wbg_maxVertexAttributes_904c5eb19a6f6c65=(a=>{const b=c(a).maxVertexAttributes;return b});b.wbg.__wbg_maxVertexBufferArrayStride_6800975c373d83bc=(a=>{const b=c(a).maxVertexBufferArrayStride;return b});b.wbg.__wbg_maxInterStageShaderComponents_b9f179b1cde06d08=(a=>{const b=c(a).maxInterStageShaderComponents;return b});b.wbg.__wbg_maxComputeWorkgroupStorageSize_9318e498283b79fb=(a=>{const b=c(a).maxComputeWorkgroupStorageSize;return b});b.wbg.__wbg_maxComputeInvocationsPerWorkgroup_2bfea723194ac5a0=(a=>{const b=c(a).maxComputeInvocationsPerWorkgroup;return b});b.wbg.__wbg_maxComputeWorkgroupSizeX_91fc9ba04de4148f=(a=>{const b=c(a).maxComputeWorkgroupSizeX;return b});b.wbg.__wbg_maxComputeWorkgroupSizeY_9052627dce4a7d1f=(a=>{const b=c(a).maxComputeWorkgroupSizeY;return b});b.wbg.__wbg_maxComputeWorkgroupSizeZ_45a1a82f8446a750=(a=>{const b=c(a).maxComputeWorkgroupSizeZ;return b});b.wbg.__wbg_maxComputeWorkgroupsPerDimension_100ee7392cc04c20=(a=>{const b=c(a).maxComputeWorkgroupsPerDimension;return b});b.wbg.__wbg_matches_0f7e350783b542c2=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_parentElement_c75962bc9997ea5f=(a=>{const b=c(a).parentElement;return p(b)?T:k(b)});b.wbg.__wbg_appendChild_51339d4cde00ee22=function(){return B(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_navigator_41bd88b80ed4685e=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_name_a46b2d975591a0b3=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbg_lastModified_711034410dfc02ad=(a=>{const b=c(a).lastModified;return b});b.wbg.__wbg_label_c7970304720cf8b0=((b,d)=>{const e=c(d).label;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbg_beginComputePass_579a2563c561da68=((a,b)=>{const d=c(a).beginComputePass(c(b));return k(d)});b.wbg.__wbg_beginRenderPass_d04327f7231bd5af=((a,b)=>{const d=c(a).beginRenderPass(c(b));return k(d)});b.wbg.__wbg_clearBuffer_c370e7adb8398388=((a,b,d)=>{c(a).clearBuffer(c(b),d)});b.wbg.__wbg_clearBuffer_b8e6751290709d43=((a,b,d,e)=>{c(a).clearBuffer(c(b),d,e)});b.wbg.__wbg_copyBufferToBuffer_79ac12f409453cf0=((a,b,d,e,f,g)=>{c(a).copyBufferToBuffer(c(b),d,c(e),f,g)});b.wbg.__wbg_copyBufferToTexture_ac956e6d47c24e73=((a,b,d,e)=>{c(a).copyBufferToTexture(c(b),c(d),c(e))});b.wbg.__wbg_copyTextureToBuffer_787ec8d8c4c216f1=((a,b,d,e)=>{c(a).copyTextureToBuffer(c(b),c(d),c(e))});b.wbg.__wbg_copyTextureToTexture_a86e849469b0ef38=((a,b,d,e)=>{c(a).copyTextureToTexture(c(b),c(d),c(e))});b.wbg.__wbg_finish_5153789564a5eee5=(a=>{const b=c(a).finish();return k(b)});b.wbg.__wbg_finish_d1049a13335e8326=((a,b)=>{const d=c(a).finish(c(b));return k(d)});b.wbg.__wbg_resolveQuerySet_8ac49c71e15cdf6a=((a,b,d,e,f,g)=>{c(a).resolveQuerySet(c(b),d>>>T,e>>>T,c(f),g>>>T)});b.wbg.__wbg_writeTimestamp_107647519ce52436=((a,b,d)=>{c(a).writeTimestamp(c(b),d>>>T)});b.wbg.__wbg_finish_863657abae52896e=(a=>{const b=c(a).finish();return k(b)});b.wbg.__wbg_finish_e580ef236d53f04b=((a,b)=>{const d=c(a).finish(c(b));return k(d)});b.wbg.__wbg_setBindGroup_e6d2dd2ab3573b6d=((a,b,d)=>{c(a).setBindGroup(b>>>T,c(d))});b.wbg.__wbg_setBindGroup_6bc8944422dbb3cd=((a,b,d,e,f,g,h)=>{c(a).setBindGroup(b>>>T,c(d),E(e,f),g,h>>>T)});b.wbg.__wbg_draw_3958097471a10642=((a,b,d,e,f)=>{c(a).draw(b>>>T,d>>>T,e>>>T,f>>>T)});b.wbg.__wbg_drawIndexed_8856cc4ccffa3498=((a,b,d,e,f,g)=>{c(a).drawIndexed(b>>>T,d>>>T,e>>>T,f,g>>>T)});b.wbg.__wbg_drawIndexedIndirect_0404fa6cb9a6db25=((a,b,d)=>{c(a).drawIndexedIndirect(c(b),d)});b.wbg.__wbg_drawIndirect_95c6eb1494a44d06=((a,b,d)=>{c(a).drawIndirect(c(b),d)});b.wbg.__wbg_setIndexBuffer_4dc5432dc348458d=((a,b,d,e)=>{c(a).setIndexBuffer(c(b),f(d),e)});b.wbg.__wbg_setIndexBuffer_f3bae4da9e407eaf=((a,b,d,e,g)=>{c(a).setIndexBuffer(c(b),f(d),e,g)});b.wbg.__wbg_setPipeline_66f1e900256fc946=((a,b)=>{c(a).setPipeline(c(b))});b.wbg.__wbg_setVertexBuffer_c782d133fd439184=((a,b,d,e)=>{c(a).setVertexBuffer(b>>>T,c(d),e)});b.wbg.__wbg_setVertexBuffer_4da0a96267ce82db=((a,b,d,e,f)=>{c(a).setVertexBuffer(b>>>T,c(d),e,f)});b.wbg.__wbg_error_f85e77a2651e41dc=(a=>{const b=c(a).error;return k(b)});b.wbg.__wbg_touches_8338f31b10bd7975=(a=>{const b=c(a).touches;return k(b)});b.wbg.__wbg_changedTouches_60ab7fa55837664f=(a=>{const b=c(a).changedTouches;return k(b)});b.wbg.__wbg_clipboardData_c480a3b34e3e7b1d=(a=>{const b=c(a).clipboardData;return p(b)?T:k(b)});b.wbg.__wbg_preventDefault_24104f3f0a54546a=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_55539cfa2506c867=(a=>{c(a).stopPropagation()});b.wbg.__wbg_addEventListener_5651108fc3ffeb6e=function(){return B(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_removeEventListener_5de660c02ed784e4=function(){return B(((a,b,d,e)=>{c(a).removeEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_size_6540ddb49e0d7120=(a=>{const b=c(a).size;return b});b.wbg.__wbg_usage_f5b34f3e0170424b=(a=>{const b=c(a).usage;return b});b.wbg.__wbg_destroy_9b5398e5b148e210=(a=>{c(a).destroy()});b.wbg.__wbg_getMappedRange_becef7e3d9dc5489=((a,b,d)=>{const e=c(a).getMappedRange(b,d);return k(e)});b.wbg.__wbg_mapAsync_91acdcf41b7ae21d=((a,b,d,e)=>{const f=c(a).mapAsync(b>>>T,d,e);return k(f)});b.wbg.__wbg_unmap_1677c09514e08e64=(a=>{c(a).unmap()});b.wbg.__wbg_dispatchWorkgroups_c484cd3530a3801d=((a,b,d,e)=>{c(a).dispatchWorkgroups(b>>>T,d>>>T,e>>>T)});b.wbg.__wbg_dispatchWorkgroupsIndirect_2b89ee1731fab5f8=((a,b,d)=>{c(a).dispatchWorkgroupsIndirect(c(b),d)});b.wbg.__wbg_end_dab719019df5969c=(a=>{c(a).end()});b.wbg.__wbg_setPipeline_598117fdeb73cf8f=((a,b)=>{c(a).setPipeline(c(b))});b.wbg.__wbg_setBindGroup_c619f49c16ef095b=((a,b,d)=>{c(a).setBindGroup(b>>>T,c(d))});b.wbg.__wbg_setBindGroup_dffce83253968cdd=((a,b,d,e,f,g,h)=>{c(a).setBindGroup(b>>>T,c(d),E(e,f),g,h>>>T)});b.wbg.__wbg_message_c934153af8567cdb=((b,d)=>{const e=c(d).message;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbg_href_d62a28e4fc1ab948=function(){return B(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f}),arguments)};b.wbg.__wbg_origin_50aa482fa6784a0a=function(){return B(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f}),arguments)};b.wbg.__wbg_protocol_91948f5885595359=function(){return B(((b,d)=>{const e=c(d).protocol;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f}),arguments)};b.wbg.__wbg_host_15090f3de0544fea=function(){return B(((b,d)=>{const e=c(d).host;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f}),arguments)};b.wbg.__wbg_hostname_b77e5e70d6ff6236=function(){return B(((b,d)=>{const e=c(d).hostname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f}),arguments)};b.wbg.__wbg_port_1b2b1249cacfca76=function(){return B(((b,d)=>{const e=c(d).port;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f}),arguments)};b.wbg.__wbg_search_6c3c472e076ee010=function(){return B(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f}),arguments)};b.wbg.__wbg_hash_a1a795b89dda8e3d=function(){return B(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f}),arguments)};b.wbg.__wbg_getItem_ed8e218e51f1efeb=function(){return B(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=p(g)?T:o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=l;r()[b/$+ V]=i;r()[b/$+ T]=h}),arguments)};b.wbg.__wbg_setItem_d002ee486462bfff=function(){return B(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_identifier_da93d3d09ccdc54c=(a=>{const b=c(a).identifier;return b});b.wbg.__wbg_pageX_8e76f76ea9375a85=(a=>{const b=c(a).pageX;return b});b.wbg.__wbg_pageY_a5a407b52fe202e7=(a=>{const b=c(a).pageY;return b});b.wbg.__wbg_force_4dd0ab6e9ef993ec=(a=>{const b=c(a).force;return b});b.wbg.__wbg_size_b9bc39a333bd5d88=(a=>{const b=c(a).size;return b});b.wbg.__wbg_type_8b3fde044d705ef3=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbg_arrayBuffer_27cefaea55cbf063=(a=>{const b=c(a).arrayBuffer();return k(b)});b.wbg.__wbg_instanceof_GpuCanvasContext_7a77e275c38d41d8=(a=>{let b;try{b=c(a) instanceof GPUCanvasContext}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_configure_93a57a4e5e0f8bcf=((a,b)=>{c(a).configure(c(b))});b.wbg.__wbg_getCurrentTexture_ecedc4f6f71990d2=(a=>{const b=c(a).getCurrentTexture();return k(b)});b.wbg.__wbg_gpu_1678673f109c8aeb=(a=>{const b=c(a).gpu;return k(b)});b.wbg.__wbg_length_b941879633a63ad8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_b383d7f8253c2d61=((a,b)=>{const d=c(a)[b>>>T];return p(d)?T:k(d)});b.wbg.__wbg_instanceof_HtmlInputElement_31b50e0cf542c524=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setautofocus_61b6a31b4866ad1f=((a,b)=>{c(a).autofocus=b!==T});b.wbg.__wbg_setsize_7532844e2c9f5e10=((a,b)=>{c(a).size=b>>>T});b.wbg.__wbg_value_9423da9d988ee8cf=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbg_setvalue_1f95e61cbc382f7f=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_get_c77649dd3862b63a=((a,b)=>{const d=c(a)[b>>>T];return p(d)?T:k(d)});b.wbg.__wbg_length_25c4aaeba8cfcc81=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_59a092aa0f27eab6=((a,b)=>{const d=c(a).item(b>>>T);return p(d)?T:k(d)});b.wbg.__wbg_get_d6c4e69528650af4=((a,b)=>{const d=c(a)[b>>>T];return p(d)?T:k(d)});b.wbg.__wbg_scrollTop_9e5ce77431551404=(a=>{const b=c(a).scrollTop;return b});b.wbg.__wbg_hidden_736e60e4fd2d186b=(a=>{const b=c(a).hidden;return b});b.wbg.__wbg_sethidden_0cbfa2481b57c377=((a,b)=>{c(a).hidden=b!==T});b.wbg.__wbg_style_3801009b2339aa94=(a=>{const b=c(a).style;return k(b)});b.wbg.__wbg_offsetTop_815aa9ab53b3cf18=(a=>{const b=c(a).offsetTop;return b});b.wbg.__wbg_offsetLeft_3b7ae7e9baa5358a=(a=>{const b=c(a).offsetLeft;return b});b.wbg.__wbg_offsetWidth_4e9930121c69297f=(a=>{const b=c(a).offsetWidth;return b});b.wbg.__wbg_blur_53431c003c82bf53=function(){return B((a=>{c(a).blur()}),arguments)};b.wbg.__wbg_focus_dbcbbbb2a04c0e1f=function(){return B((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_type_9f716e985ca0633c=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbg_clientX_1a480606ab0cabaa=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_9c7878f7faf3900f=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_ctrlKey_0a805df688b5bf42=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_8a070ab6169b5fa4=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_d89287be4389a3c1=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_7a095234b69de930=(a=>{const b=c(a).button;return b});b.wbg.__wbg_clipboard_47d5c6d7496034ae=(a=>{const b=c(a).clipboard;return p(b)?T:k(b)});b.wbg.__wbg_gpu_24536c9523d924b1=(a=>{const b=c(a).gpu;return k(b)});b.wbg.__wbg_userAgent_2053026e2b1e0c7e=function(){return B(((b,d)=>{const e=c(d).userAgent;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f}),arguments)};b.wbg.__wbg_now_0cfdc90c97d0c24b=(a=>{const b=c(a).now();return b});b.wbg.__wbg_features_dfb2178c91fa1dd7=(a=>{const b=c(a).features;return k(b)});b.wbg.__wbg_limits_45ceb777867eb768=(a=>{const b=c(a).limits;return k(b)});b.wbg.__wbg_queue_f2aeb5c277e56f93=(a=>{const b=c(a).queue;return k(b)});b.wbg.__wbg_setonuncapturederror_b3c814f611d5e585=((a,b)=>{c(a).onuncapturederror=c(b)});b.wbg.__wbg_createBindGroup_fa5515d52f9c6a69=((a,b)=>{const d=c(a).createBindGroup(c(b));return k(d)});b.wbg.__wbg_createBindGroupLayout_af3b9d9ee0a1f5f9=((a,b)=>{const d=c(a).createBindGroupLayout(c(b));return k(d)});b.wbg.__wbg_createBuffer_36e159f52cc644a7=((a,b)=>{const d=c(a).createBuffer(c(b));return k(d)});b.wbg.__wbg_createCommandEncoder_a50a1dab2b499b95=((a,b)=>{const d=c(a).createCommandEncoder(c(b));return k(d)});b.wbg.__wbg_createComputePipeline_89131452dfd12672=((a,b)=>{const d=c(a).createComputePipeline(c(b));return k(d)});b.wbg.__wbg_createPipelineLayout_1e10c8281fb85c01=((a,b)=>{const d=c(a).createPipelineLayout(c(b));return k(d)});b.wbg.__wbg_createQuerySet_ccb746122176f8e5=((a,b)=>{const d=c(a).createQuerySet(c(b));return k(d)});b.wbg.__wbg_createRenderBundleEncoder_ad2d0237f581427b=((a,b)=>{const d=c(a).createRenderBundleEncoder(c(b));return k(d)});b.wbg.__wbg_createRenderPipeline_745f00bcb1ca6edf=((a,b)=>{const d=c(a).createRenderPipeline(c(b));return k(d)});b.wbg.__wbg_createSampler_09cd36835c9befb3=((a,b)=>{const d=c(a).createSampler(c(b));return k(d)});b.wbg.__wbg_createShaderModule_59bbf537b8b5cf7c=((a,b)=>{const d=c(a).createShaderModule(c(b));return k(d)});b.wbg.__wbg_createTexture_dbd00b550944125c=((a,b)=>{const d=c(a).createTexture(c(b));return k(d)});b.wbg.__wbg_destroy_abb6deaa6cb27aa3=(a=>{c(a).destroy()});b.wbg.__wbg_popErrorScope_19075fb98a08b740=(a=>{const b=c(a).popErrorScope();return k(b)});b.wbg.__wbg_pushErrorScope_0728aae3f2d3ed48=((a,b)=>{c(a).pushErrorScope(f(b))});b.wbg.__wbg_instanceof_GpuOutOfMemoryError_45166ef4e2774fbe=(a=>{let b;try{b=c(a) instanceof GPUOutOfMemoryError}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_copyExternalImageToTexture_819ec294d299f624=((a,b,d,e)=>{c(a).copyExternalImageToTexture(c(b),c(d),c(e))});b.wbg.__wbg_submit_3104e9b014f75846=((a,b)=>{c(a).submit(c(b))});b.wbg.__wbg_writeBuffer_becf0c8f0323ffd7=((a,b,d,e,f,g)=>{c(a).writeBuffer(c(b),d,c(e),f,g)});b.wbg.__wbg_writeTexture_465ecc6146e5052c=((a,b,d,e,f)=>{c(a).writeTexture(c(b),c(d),c(e),c(f))});b.wbg.__wbg_has_8720889cf3ad610c=((a,b,d)=>{const e=c(a).has(j(b,d));return e});b.wbg.__wbg_top_98ff0408c018d25e=(a=>{const b=c(a).top;return b});b.wbg.__wbg_left_23a613d619fb4206=(a=>{const b=c(a).left;return b});b.wbg.__wbg_instanceof_GpuAdapter_c0a5a310603ba618=(a=>{let b;try{b=c(a) instanceof GPUAdapter}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_features_88901f43932fb28e=(a=>{const b=c(a).features;return k(b)});b.wbg.__wbg_limits_a7f3fbf58768b61f=(a=>{const b=c(a).limits;return k(b)});b.wbg.__wbg_requestDevice_068e794820eb88eb=((a,b)=>{const d=c(a).requestDevice(c(b));return k(d)});b.wbg.__wbg_instanceof_GpuValidationError_af2aa2e306669317=(a=>{let b;try{b=c(a) instanceof GPUValidationError}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setwidth_15266a5e81f43cf0=((a,b)=>{c(a).width=b>>>T});b.wbg.__wbg_setheight_2e9bab573f1775a6=((a,b)=>{c(a).height=b>>>T});b.wbg.__wbg_items_0076326dc6f1b7eb=(a=>{const b=c(a).items;return k(b)});b.wbg.__wbg_files_e5c28ff6ab126f7b=(a=>{const b=c(a).files;return p(b)?T:k(b)});b.wbg.__wbg_getData_8aeca5994420c599=function(){return B(((b,d,e,f)=>{const g=c(d).getData(j(e,f));const h=o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);const i=l;r()[b/$+ V]=i;r()[b/$+ T]=h}),arguments)};b.wbg.__wbg_width_e0c6b79d8cdd8897=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_bed51746e072a118=(a=>{const b=c(a).height;return b});b.wbg.__wbg_getPreferredCanvasFormat_1f6c9ef810196b92=(a=>{const b=c(a).getPreferredCanvasFormat();return k(b)});b.wbg.__wbg_requestAdapter_d8298d7a27a391f0=((a,b)=>{const d=c(a).requestAdapter(c(b));return k(d)});b.wbg.__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_width_2931aaedd21f1fff=(a=>{const b=c(a).width;return b});b.wbg.__wbg_setwidth_a667a942dba6656e=((a,b)=>{c(a).width=b>>>T});b.wbg.__wbg_height_0d36fbbeb60b0661=(a=>{const b=c(a).height;return b});b.wbg.__wbg_setheight_a747d440760fe5aa=((a,b)=>{c(a).height=b>>>T});b.wbg.__wbg_getContext_7c5944ea807bf5d3=function(){return B(((a,b,d)=>{const e=c(a).getContext(j(b,d));return p(e)?T:k(e)}),arguments)};b.wbg.__wbg_matches_07c564b5b4101cf2=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_deltaX_84508d00a1050e70=(a=>{const b=c(a).deltaX;return b});b.wbg.__wbg_deltaY_64823169afb0335d=(a=>{const b=c(a).deltaY;return b});b.wbg.__wbg_deltaMode_1c680147cfdba8a5=(a=>{const b=c(a).deltaMode;return b});b.wbg.__wbg_dataTransfer_bac494821ce31837=(a=>{const b=c(a).dataTransfer;return p(b)?T:k(b)});b.wbg.__wbg_keyCode_dfa86be31f5ef90c=(a=>{const b=c(a).keyCode;return b});b.wbg.__wbg_altKey_612289acf855835c=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_582686fb2263dd3c=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_48e8701355d8e2d4=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_43193b7cc99f8914=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_isComposing_f41d219def91d438=(a=>{const b=c(a).isComposing;return b});b.wbg.__wbg_key_8aeaa079126a9cc7=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbg_setProperty_b95ef63ab852879e=function(){return B(((a,b,d,e,f)=>{c(a).setProperty(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_end_bdfb66792e0c59a2=(a=>{c(a).end()});b.wbg.__wbg_executeBundles_0a1fdfd83c1a3e57=((a,b)=>{c(a).executeBundles(c(b))});b.wbg.__wbg_setBlendConstant_e89574db5137b2f6=((a,b)=>{c(a).setBlendConstant(c(b))});b.wbg.__wbg_setScissorRect_0af8c89e90a6e89c=((a,b,d,e,f)=>{c(a).setScissorRect(b>>>T,d>>>T,e>>>T,f>>>T)});b.wbg.__wbg_setStencilReference_71be0db67db2f7ab=((a,b)=>{c(a).setStencilReference(b>>>T)});b.wbg.__wbg_setViewport_9c5fb686baf1cf4f=((a,b,d,e,f,g,h)=>{c(a).setViewport(b,d,e,f,g,h)});b.wbg.__wbg_setBindGroup_ed098a3302f084a7=((a,b,d)=>{c(a).setBindGroup(b>>>T,c(d))});b.wbg.__wbg_setBindGroup_ce4432036922cd83=((a,b,d,e,f,g,h)=>{c(a).setBindGroup(b>>>T,c(d),E(e,f),g,h>>>T)});b.wbg.__wbg_draw_6357a5fbc8a6b097=((a,b,d,e,f)=>{c(a).draw(b>>>T,d>>>T,e>>>T,f>>>T)});b.wbg.__wbg_drawIndexed_5d1dd89d7375148c=((a,b,d,e,f,g)=>{c(a).drawIndexed(b>>>T,d>>>T,e>>>T,f,g>>>T)});b.wbg.__wbg_drawIndexedIndirect_526599171cfbbee5=((a,b,d)=>{c(a).drawIndexedIndirect(c(b),d)});b.wbg.__wbg_drawIndirect_8dd595dc622e21ac=((a,b,d)=>{c(a).drawIndirect(c(b),d)});b.wbg.__wbg_setIndexBuffer_1f4a86d1cc8c16d9=((a,b,d,e)=>{c(a).setIndexBuffer(c(b),f(d),e)});b.wbg.__wbg_setIndexBuffer_9f8493460611f96b=((a,b,d,e,g)=>{c(a).setIndexBuffer(c(b),f(d),e,g)});b.wbg.__wbg_setPipeline_18ce556bdea62cc5=((a,b)=>{c(a).setPipeline(c(b))});b.wbg.__wbg_setVertexBuffer_2a2c84d65c1063f9=((a,b,d,e)=>{c(a).setVertexBuffer(b>>>T,c(d),e)});b.wbg.__wbg_setVertexBuffer_176c2dff823c42c1=((a,b,d,e,f)=>{c(a).setVertexBuffer(b>>>T,c(d),e,f)});b.wbg.__wbg_createView_3e46af1f54fdcd1f=((a,b)=>{const d=c(a).createView(c(b));return k(d)});b.wbg.__wbg_destroy_728f676d96e34538=(a=>{c(a).destroy()});b.wbg.__wbg_new_ffc6d4d085022169=(()=>{const a=new N();return k(a)});b.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_90c26b09837aba1c=function(){return B(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_9fb8d994e1c0aaac=(()=>{const a=new a0();return k(a)});b.wbg.__wbg_self_f0e34d89f33b99fd=function(){return B((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_d3b084224f4774d7=function(){return B((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return B((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_35dfdd59a4da3e74=function(){return B((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbg_push_901f3914205d44de=((a,b)=>{const d=c(a).push(c(b));return d});b.wbg.__wbg_call_5da1969d7cd31ccd=function(){return B(((a,b,d)=>{const e=c(a).call(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_instanceof_Object_702c4990f4c3db8d=(a=>{let b;try{b=c(a) instanceof a0}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_valueOf_cece5f88a709e1bd=(a=>{const b=c(a).valueOf();return k(b)});b.wbg.__wbg_new_60f57089c7563e81=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=T;try{return F(d,c.b,a,b)}finally{c.a=d}};const e=new a1(d);return k(e)}finally{c.a=c.b=T}});b.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=a1.resolve(c(a));return k(b)});b.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_8371cc12cfedc5a2=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=((a,b,d)=>{const e=new U(c(a),b>>>T,d>>>T);return k(e)});b.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new U(c(a));return k(b)});b.wbg.__wbg_set_2357bf09366ee480=((a,b,d)=>{c(a).set(c(b),d>>>T)});b.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=c(a).length;return b});b.wbg.__wbg_buffer_261f267c3396c59b=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_set_759f75cd92b612d2=function(){return B(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ V]=g;r()[b/$+ T]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new S(j(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbindgen_closure_wrapper1151=((a,b,c)=>{const d=v(a,b,a2,w);return k(d)});b.wbg.__wbindgen_closure_wrapper1153=((a,b,c)=>{const d=v(a,b,a2,x);return k(d)});b.wbg.__wbindgen_closure_wrapper1155=((a,b,c)=>{const d=v(a,b,a2,y);return k(d)});b.wbg.__wbindgen_closure_wrapper1655=((a,b,c)=>{const d=v(a,b,a3,z);return k(d)});b.wbg.__wbindgen_closure_wrapper1657=((a,b,c)=>{const d=v(a,b,a3,z);return k(d)});b.wbg.__wbindgen_closure_wrapper1693=((a,b,c)=>{const d=v(a,b,580,A);return k(d)});return b});var x=((b,c)=>{try{const g=a.__wbindgen_add_to_stack_pointer(-_);a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h11cf8f52f40ca179(g,b,c);var d=r()[g/$+ T];var e=r()[g/$+ V];if(e){throw f(d)}}finally{a.__wbindgen_add_to_stack_pointer(_)}});var F=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h004623a3e1cf3d0d(b,c,k(d),k(e))});var t=(()=>{if(s===P||s.byteLength===T){s=new Float64Array(a.memory.buffer)};return s});var D=(()=>{if(C===P||C.byteLength===T){C=new Uint32Array(a.memory.buffer)};return C});var e=(a=>{if(a<132)return;b[a]=d;d=a});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:V,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=T;try{return e(c,f.b,...b)}finally{if(--f.cnt===T){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var o=((a,b,c)=>{if(c===O){const c=m.encode(a);const d=b(c.length,V)>>>T;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,V)>>>T;const f=i();let g=T;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==T){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,V)>>>T;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var i=(()=>{if(h===P||h.byteLength===T){h=new U(a.memory.buffer)};return h});var j=((a,b)=>{a=a>>>T;return g.decode(i().subarray(a,a+ b))});var y=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h77f7fb686647de9c(b,c,k(d))});let a;const b=new N(128).fill(O);b.push(O,P,!0,!1);let d=b.length;const g=typeof TextDecoder!==Q?new TextDecoder(R,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw S(`TextDecoder not available`)}};if(typeof TextDecoder!==Q){g.decode()};let h=P;let l=T;const m=typeof TextEncoder!==Q?new TextEncoder(R):{encode:()=>{throw S(`TextEncoder not available`)}};const n=typeof m.encodeInto===W?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=P;let s=P;let C=P;class G{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=T;return a}free(){const b=this.__destroy_into_raw();a.__wbg_webhandle_free(b)}constructor(){const b=a.webhandle_new();this.__wbg_ptr=b>>>T;return this}start(b){const c=o(b,a.__wbindgen_malloc,a.__wbindgen_realloc);const d=l;const e=a.webhandle_start(this.__wbg_ptr,c,d);return f(e)}destroy(){a.webhandle_destroy(this.__wbg_ptr)}example(){a.webhandle_example(this.__wbg_ptr)}has_panicked(){const b=a.webhandle_has_panicked(this.__wbg_ptr);return b!==T}panic_message(){try{const d=a.__wbindgen_add_to_stack_pointer(-_);a.webhandle_panic_message(d,this.__wbg_ptr);var b=r()[d/$+ T];var c=r()[d/$+ V];let e;if(b!==T){e=j(b,c).slice();a.__wbindgen_free(b,c*V,V)};return e}finally{a.__wbindgen_add_to_stack_pointer(_)}}panic_callstack(){try{const d=a.__wbindgen_add_to_stack_pointer(-_);a.webhandle_panic_callstack(d,this.__wbg_ptr);var b=r()[d/$+ T];var c=r()[d/$+ V];let e;if(b!==T){e=j(b,c).slice();a.__wbindgen_free(b,c*V,V)};return e}finally{a.__wbindgen_add_to_stack_pointer(_)}}}export default M;export{G as WebHandle,L as initSync}
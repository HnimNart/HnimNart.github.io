let R=0,N=null,O=`undefined`,X=`boolean`,Y=`string`,T=1,Z=`Object`,P=`utf-8`,W=`number`,$=4,a1=349,U=`function`,_=16,L=Array,Q=Error,V=Int32Array,a0=Promise,S=Uint8Array,M=undefined;var F=(async(a,b)=>{if(typeof Response===U&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===U){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var u=(a=>{const b=typeof a;if(b==W||b==X||a==N){return `${a}`};if(b==Y){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==N){return `Symbol`}else{return `Symbol(${b})`}};if(b==U){const b=a.name;if(typeof b==Y&&b.length>R){return `Function(${b})`}else{return `Function`}};if(L.isArray(a)){const b=a.length;let c=`[`;if(b>R){c+=u(a[R])};for(let d=T;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>T){d=c[T]}else{return toString.call(a)};if(d==Z){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return Z}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var w=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__hb7a04baedbffc392(b,c)});var H=((a,b)=>{});var y=((b,c)=>{try{const g=a.__wbindgen_add_to_stack_pointer(-_);a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcbd1f313e339306d(g,b,c);var d=r()[g/$+ R];var e=r()[g/$+ T];if(e){throw f(d)}}finally{a.__wbindgen_add_to_stack_pointer(_)}});var k=(a=>{if(d===b.length)b.push(b.length+ T);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var K=(async(b)=>{if(a!==M)return a;if(typeof b===O){b=new URL(`simulator-9c3fe6deaf576714ae99352543c0b26d1bac8a1f280eb3d97b305fdb1d37b4564f53c1ef2fe5637609ef8dd83e6b2fcd_bg.wasm`,import.meta.url)};const c=G();if(typeof b===Y||typeof Request===U&&b instanceof Request||typeof URL===U&&b instanceof URL){b=fetch(b)};H(c);const {instance:d,module:e}=await F(await b,c);return I(d,e)});var A=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h91e4a08bcd88baa2(b,c,k(d))});function C(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var J=(b=>{if(a!==M)return a;const c=G();H(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return I(d,b)});var G=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==T){b.a=R;return !0};const c=!1;return c});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===Y?e:M;var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/$+ T]=h;r()[b/$+ R]=g});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===W?d:M;t()[a/8+ T]=p(e)?R:e;r()[a/$+ R]=!p(e)});b.wbg.__wbg_error_5287ab77bfdcdbfd=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,T)}});b.wbg.__wbg_new_2135eb8c7b17573b=(()=>{const a=new Q();return k(a)});b.wbg.__wbg_stack_5e4edbe5d1e14374=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f});b.wbg.__wbg_warn_c32f95eaa37484b4=((a,b)=>{console.warn(j(a,b))});b.wbg.__wbg_info_914f65437df3ae09=((a,b)=>{console.info(j(a,b))});b.wbg.__wbg_debug_975e75d6a98e7fa1=((a,b)=>{console.debug(j(a,b))});b.wbg.__wbg_trace_113a411129582eba=((a,b)=>{console.trace(j(a,b))});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===M;return b});b.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===U;return b});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===X?(b?T:R):2;return d});b.wbg.__wbg_instanceof_WebGl2RenderingContext_f921526c513bf717=(a=>{let b;try{b=c(a) instanceof WebGL2RenderingContext}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bindVertexArray_8863a216d7b0a339=((a,b)=>{c(a).bindVertexArray(c(b))});b.wbg.__wbg_bufferData_21334671c4ba6004=((a,b,d,e)=>{c(a).bufferData(b>>>R,c(d),e>>>R)});b.wbg.__wbg_createVertexArray_51d51e1e1e13e9f6=(a=>{const b=c(a).createVertexArray();return p(b)?R:k(b)});b.wbg.__wbg_texImage2D_07240affd06971e9=function(){return C(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_d2841ded12a8aa66=function(){return C(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_bccf4e250f1ce1b8=function(){return C(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,k)}),arguments)};b.wbg.__wbg_activeTexture_799bf1387e911c27=((a,b)=>{c(a).activeTexture(b>>>R)});b.wbg.__wbg_attachShader_47256b6b3d42a22e=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_24f6010e273fa400=((a,b,d)=>{c(a).bindBuffer(b>>>R,c(d))});b.wbg.__wbg_bindTexture_92d6d7f8bff9531e=((a,b,d)=>{c(a).bindTexture(b>>>R,c(d))});b.wbg.__wbg_blendEquationSeparate_205526dad772d160=((a,b,d)=>{c(a).blendEquationSeparate(b>>>R,d>>>R)});b.wbg.__wbg_blendFuncSeparate_fbf93dee3e5ce456=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>R,d>>>R,e>>>R,f>>>R)});b.wbg.__wbg_clear_2db2efe323bfdf68=((a,b)=>{c(a).clear(b>>>R)});b.wbg.__wbg_clearColor_7a7d04702f7e38e5=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_fba1e2efd891e2ac=((a,b,d,e,f)=>{c(a).colorMask(b!==R,d!==R,e!==R,f!==R)});b.wbg.__wbg_compileShader_6bf78b425d5c98e1=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_323425af422748ac=(a=>{const b=c(a).createBuffer();return p(b)?R:k(b)});b.wbg.__wbg_createProgram_4eaf3b97b5747a62=(a=>{const b=c(a).createProgram();return p(b)?R:k(b)});b.wbg.__wbg_createShader_429776c9dd6fb87b=((a,b)=>{const d=c(a).createShader(b>>>R);return p(d)?R:k(d)});b.wbg.__wbg_createTexture_1bf4d6fec570124b=(a=>{const b=c(a).createTexture();return p(b)?R:k(b)});b.wbg.__wbg_deleteBuffer_2c09d03fa4b0bd08=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_53a32852f245b839=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_7c1222349324b5e2=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_4fcfea73cd8f6214=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_04abccd441871232=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_e02106ca6c7002d6=((a,b)=>{c(a).disable(b>>>R)});b.wbg.__wbg_disableVertexAttribArray_6d57776c8f642f44=((a,b)=>{c(a).disableVertexAttribArray(b>>>R)});b.wbg.__wbg_drawElements_a9529eefaf2008bd=((a,b,d,e,f)=>{c(a).drawElements(b>>>R,d,e>>>R,f)});b.wbg.__wbg_enable_195891416c520019=((a,b)=>{c(a).enable(b>>>R)});b.wbg.__wbg_enableVertexAttribArray_8804480c2ea0bb72=((a,b)=>{c(a).enableVertexAttribArray(b>>>R)});b.wbg.__wbg_getAttribLocation_7dbdbad935433494=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_7191ad6ea53607fe=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_77909f6d51d49d4d=function(){return C(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?R:k(e)}),arguments)};b.wbg.__wbg_getParameter_55b36a787dbbfb74=function(){return C(((a,b)=>{const d=c(a).getParameter(b>>>R);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_b81bc53188e286fa=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/$+ T]=h;r()[b/$+ R]=g});b.wbg.__wbg_getProgramParameter_35522a0bfdfaad27=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>R);return k(e)});b.wbg.__wbg_getShaderInfoLog_968b93e75477d725=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/$+ T]=h;r()[b/$+ R]=g});b.wbg.__wbg_getShaderParameter_ac2727ae4fe7648e=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>R);return k(e)});b.wbg.__wbg_getSupportedExtensions_fafc31aab913037d=(a=>{const b=c(a).getSupportedExtensions();return p(b)?R:k(b)});b.wbg.__wbg_getUniformLocation_9f6eb60c560a347b=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?R:k(f)});b.wbg.__wbg_linkProgram_33998194075d71fb=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_f3a24990aa352fc7=((a,b,d)=>{c(a).pixelStorei(b>>>R,d)});b.wbg.__wbg_scissor_e8e41e1c0a9817c8=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_1cb7c64dc7d1a500=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_85dad939f62a15aa=((a,b,d,e)=>{c(a).texParameteri(b>>>R,d>>>R,e)});b.wbg.__wbg_uniform1i_d2e61a6a43889648=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_b6e484a1302ea599=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_3683cf6f60939dcd=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_316ffe2f0458fde7=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>R,d,e>>>R,f!==R,g,h)});b.wbg.__wbg_viewport_fad1ce9e18f741c0=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_instanceof_Window_9029196b662bc42a=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_f7ace2b956f30a4f=(a=>{const b=c(a).document;return p(b)?R:k(b)});b.wbg.__wbg_location_56243dba507f472d=(a=>{const b=c(a).location;return k(b)});b.wbg.__wbg_navigator_7c9103698acde322=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_innerHeight_2dd06d8cf68f1d7d=function(){return C((a=>{const b=c(a).innerHeight;return k(b)}),arguments)};b.wbg.__wbg_devicePixelRatio_f9de7bddca0eaf20=(a=>{const b=c(a).devicePixelRatio;return b});b.wbg.__wbg_performance_2c295061c8b01e0b=(a=>{const b=c(a).performance;return p(b)?R:k(b)});b.wbg.__wbg_localStorage_dbac11bd189e9fa0=function(){return C((a=>{const b=c(a).localStorage;return p(b)?R:k(b)}),arguments)};b.wbg.__wbg_matchMedia_12ef69056e32d0b3=function(){return C(((a,b,d)=>{const e=c(a).matchMedia(j(b,d));return p(e)?R:k(e)}),arguments)};b.wbg.__wbg_open_7a2a86bf6285507d=function(){return C(((a,b,d,e,f)=>{const g=c(a).open(j(b,d),j(e,f));return p(g)?R:k(g)}),arguments)};b.wbg.__wbg_requestAnimationFrame_d082200514b6674d=function(){return C(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_clearInterval_080a47b47538d08c=((a,b)=>{c(a).clearInterval(b)});b.wbg.__wbg_setTimeout_eb1a0d116c26d9f6=function(){return C(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_body_674aec4c1c0910cd=(a=>{const b=c(a).body;return p(b)?R:k(b)});b.wbg.__wbg_createElement_4891554b28d3388b=function(){return C(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_getElementById_cc0e0d931b0d9a28=((a,b,d)=>{const e=c(a).getElementById(j(b,d));return p(e)?R:k(e)});b.wbg.__wbg_setid_1984ee27e5075311=((a,b,d)=>{c(a).id=j(b,d)});b.wbg.__wbg_scrollLeft_ea915614eac6bbeb=(a=>{const b=c(a).scrollLeft;return b});b.wbg.__wbg_clientWidth_51ec21e3189f5656=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_09ec0b524d59c367=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_setinnerHTML_b089587252408b67=((a,b,d)=>{c(a).innerHTML=j(b,d)});b.wbg.__wbg_getBoundingClientRect_ac9db8cf97ca8083=(a=>{const b=c(a).getBoundingClientRect();return k(b)});b.wbg.__wbg_remove_48288e91662163dc=(a=>{c(a).remove()});b.wbg.__wbg_items_0076326dc6f1b7eb=(a=>{const b=c(a).items;return k(b)});b.wbg.__wbg_files_e5c28ff6ab126f7b=(a=>{const b=c(a).files;return p(b)?R:k(b)});b.wbg.__wbg_getData_8aeca5994420c599=function(){return C(((b,d,e,f)=>{const g=c(d).getData(j(e,f));const h=o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);const i=l;r()[b/$+ T]=i;r()[b/$+ R]=h}),arguments)};b.wbg.__wbg_dataTransfer_bac494821ce31837=(a=>{const b=c(a).dataTransfer;return p(b)?R:k(b)});b.wbg.__wbg_keyCode_dfa86be31f5ef90c=(a=>{const b=c(a).keyCode;return b});b.wbg.__wbg_altKey_612289acf855835c=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_582686fb2263dd3c=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_48e8701355d8e2d4=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_43193b7cc99f8914=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_isComposing_f41d219def91d438=(a=>{const b=c(a).isComposing;return b});b.wbg.__wbg_key_8aeaa079126a9cc7=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f});b.wbg.__wbg_matches_07c564b5b4101cf2=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_data_03708a776af7d2f6=((b,d)=>{const e=c(d).data;var f=p(e)?R:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/$+ T]=g;r()[b/$+ R]=f});b.wbg.__wbg_setProperty_b95ef63ab852879e=function(){return C(((a,b,d,e,f)=>{c(a).setProperty(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_matches_0f7e350783b542c2=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_parentElement_c75962bc9997ea5f=(a=>{const b=c(a).parentElement;return p(b)?R:k(b)});b.wbg.__wbg_appendChild_51339d4cde00ee22=function(){return C(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_writeText_9c0cc5145d005509=((a,b,d)=>{const e=c(a).writeText(j(b,d));return k(e)});b.wbg.__wbg_length_dd2eb44022569c32=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_135f0a95f49ed3ff=((a,b)=>{const d=c(a)[b>>>R];return p(d)?R:k(d)});b.wbg.__wbg_name_a46b2d975591a0b3=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f});b.wbg.__wbg_lastModified_711034410dfc02ad=(a=>{const b=c(a).lastModified;return b});b.wbg.__wbg_touches_8338f31b10bd7975=(a=>{const b=c(a).touches;return k(b)});b.wbg.__wbg_changedTouches_60ab7fa55837664f=(a=>{const b=c(a).changedTouches;return k(b)});b.wbg.__wbg_createObjectURL_d82f2880bada6a1d=function(){return C(((b,d)=>{const e=URL.createObjectURL(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_clipboardData_c480a3b34e3e7b1d=(a=>{const b=c(a).clipboardData;return p(b)?R:k(b)});b.wbg.__wbg_preventDefault_24104f3f0a54546a=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_55539cfa2506c867=(a=>{c(a).stopPropagation()});b.wbg.__wbg_instanceof_HtmlAnchorElement_a293f072b6174b83=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setdownload_0d874703cef6b180=((a,b,d)=>{c(a).download=j(b,d)});b.wbg.__wbg_sethref_a3fde9630423d8ed=((a,b,d)=>{c(a).href=j(b,d)});b.wbg.__wbg_instanceof_HtmlButtonElement_6bd3bcb5370764a5=(a=>{let b;try{b=c(a) instanceof HTMLButtonElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_href_d62a28e4fc1ab948=function(){return C(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_origin_50aa482fa6784a0a=function(){return C(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_protocol_91948f5885595359=function(){return C(((b,d)=>{const e=c(d).protocol;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_host_15090f3de0544fea=function(){return C(((b,d)=>{const e=c(d).host;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_hostname_b77e5e70d6ff6236=function(){return C(((b,d)=>{const e=c(d).hostname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_port_1b2b1249cacfca76=function(){return C(((b,d)=>{const e=c(d).port;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_search_6c3c472e076ee010=function(){return C(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_hash_a1a795b89dda8e3d=function(){return C(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_getItem_ed8e218e51f1efeb=function(){return C(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=p(g)?R:o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=l;r()[b/$+ T]=i;r()[b/$+ R]=h}),arguments)};b.wbg.__wbg_setItem_d002ee486462bfff=function(){return C(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_identifier_da93d3d09ccdc54c=(a=>{const b=c(a).identifier;return b});b.wbg.__wbg_pageX_8e76f76ea9375a85=(a=>{const b=c(a).pageX;return b});b.wbg.__wbg_pageY_a5a407b52fe202e7=(a=>{const b=c(a).pageY;return b});b.wbg.__wbg_force_4dd0ab6e9ef993ec=(a=>{const b=c(a).force;return b});b.wbg.__wbg_size_b9bc39a333bd5d88=(a=>{const b=c(a).size;return b});b.wbg.__wbg_type_8b3fde044d705ef3=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f});b.wbg.__wbg_newwithu8arraysequenceandoptions_854056d2c35b489c=function(){return C(((a,b)=>{const d=new Blob(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_arrayBuffer_27cefaea55cbf063=(a=>{const b=c(a).arrayBuffer();return k(b)});b.wbg.__wbg_addEventListener_5651108fc3ffeb6e=function(){return C(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_removeEventListener_5de660c02ed784e4=function(){return C(((a,b,d,e)=>{c(a).removeEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_instanceof_HtmlInputElement_31b50e0cf542c524=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setaccept_c88dd3ef66a1bc96=((a,b,d)=>{c(a).accept=j(b,d)});b.wbg.__wbg_setautofocus_61b6a31b4866ad1f=((a,b)=>{c(a).autofocus=b!==R});b.wbg.__wbg_files_0b91078a034a0f7b=(a=>{const b=c(a).files;return p(b)?R:k(b)});b.wbg.__wbg_setmultiple_4e25d3b971ac900a=((a,b)=>{c(a).multiple=b!==R});b.wbg.__wbg_setsize_7532844e2c9f5e10=((a,b)=>{c(a).size=b>>>R});b.wbg.__wbg_settype_ed9a0cf484870612=((a,b,d)=>{c(a).type=j(b,d)});b.wbg.__wbg_value_9423da9d988ee8cf=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f});b.wbg.__wbg_setvalue_1f95e61cbc382f7f=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_type_9f716e985ca0633c=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f});b.wbg.__wbg_length_b941879633a63ad8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_b383d7f8253c2d61=((a,b)=>{const d=c(a)[b>>>R];return p(d)?R:k(d)});b.wbg.__wbg_length_25c4aaeba8cfcc81=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_59a092aa0f27eab6=((a,b)=>{const d=c(a).item(b>>>R);return p(d)?R:k(d)});b.wbg.__wbg_get_d6c4e69528650af4=((a,b)=>{const d=c(a)[b>>>R];return p(d)?R:k(d)});b.wbg.__wbg_instanceof_HtmlElement_6f4725d4677c7968=(a=>{let b;try{b=c(a) instanceof HTMLElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_scrollTop_9e5ce77431551404=(a=>{const b=c(a).scrollTop;return b});b.wbg.__wbg_setinnerText_1849424c2fdc16ec=((a,b,d)=>{c(a).innerText=j(b,d)});b.wbg.__wbg_hidden_736e60e4fd2d186b=(a=>{const b=c(a).hidden;return b});b.wbg.__wbg_sethidden_0cbfa2481b57c377=((a,b)=>{c(a).hidden=b!==R});b.wbg.__wbg_style_3801009b2339aa94=(a=>{const b=c(a).style;return k(b)});b.wbg.__wbg_offsetTop_815aa9ab53b3cf18=(a=>{const b=c(a).offsetTop;return b});b.wbg.__wbg_offsetLeft_3b7ae7e9baa5358a=(a=>{const b=c(a).offsetLeft;return b});b.wbg.__wbg_offsetWidth_4e9930121c69297f=(a=>{const b=c(a).offsetWidth;return b});b.wbg.__wbg_setonclick_4e9c9187dbc33082=((a,b)=>{c(a).onclick=c(b)});b.wbg.__wbg_blur_53431c003c82bf53=function(){return C((a=>{c(a).blur()}),arguments)};b.wbg.__wbg_focus_dbcbbbb2a04c0e1f=function(){return C((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_clientX_1a480606ab0cabaa=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_9c7878f7faf3900f=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_ctrlKey_0a805df688b5bf42=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_8a070ab6169b5fa4=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_d89287be4389a3c1=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_7a095234b69de930=(a=>{const b=c(a).button;return b});b.wbg.__wbg_clipboard_47d5c6d7496034ae=(a=>{const b=c(a).clipboard;return p(b)?R:k(b)});b.wbg.__wbg_userAgent_2053026e2b1e0c7e=function(){return C(((b,d)=>{const e=c(d).userAgent;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f}),arguments)};b.wbg.__wbg_now_0cfdc90c97d0c24b=(a=>{const b=c(a).now();return b});b.wbg.__wbg_bindVertexArrayOES_b7d9da7e073aa6b5=((a,b)=>{c(a).bindVertexArrayOES(c(b))});b.wbg.__wbg_createVertexArrayOES_6a3c3a5a68201f8f=(a=>{const b=c(a).createVertexArrayOES();return p(b)?R:k(b)});b.wbg.__wbg_instanceof_WebGlRenderingContext_ea632546035eecb1=(a=>{let b;try{b=c(a) instanceof WebGLRenderingContext}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bufferData_a11a9f65f31e7256=((a,b,d,e)=>{c(a).bufferData(b>>>R,c(d),e>>>R)});b.wbg.__wbg_texImage2D_6175916e58c59bc7=function(){return C(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_f1a31f8045b7f831=function(){return C(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>R,d,e,f,g,h,i>>>R,j>>>R,c(k))}),arguments)};b.wbg.__wbg_activeTexture_93b4de60af07da9c=((a,b)=>{c(a).activeTexture(b>>>R)});b.wbg.__wbg_attachShader_b65b695055670cb5=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_313561e5bc0e533f=((a,b,d)=>{c(a).bindBuffer(b>>>R,c(d))});b.wbg.__wbg_bindTexture_9cb5c770d1ba2cca=((a,b,d)=>{c(a).bindTexture(b>>>R,c(d))});b.wbg.__wbg_blendEquationSeparate_7ec5e34f066e44f8=((a,b,d)=>{c(a).blendEquationSeparate(b>>>R,d>>>R)});b.wbg.__wbg_blendFuncSeparate_7547ade0a7dfade2=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>R,d>>>R,e>>>R,f>>>R)});b.wbg.__wbg_clear_2ccea1f65b510c97=((a,b)=>{c(a).clear(b>>>R)});b.wbg.__wbg_clearColor_de587608b28bc7ed=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_7cbd7a102954ede9=((a,b,d,e,f)=>{c(a).colorMask(b!==R,d!==R,e!==R,f!==R)});b.wbg.__wbg_compileShader_d88d0a8cd9b72b4d=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_59051f4461e7c5e2=(a=>{const b=c(a).createBuffer();return p(b)?R:k(b)});b.wbg.__wbg_createProgram_88dbe21c0b682e1a=(a=>{const b=c(a).createProgram();return p(b)?R:k(b)});b.wbg.__wbg_createShader_9d7d388633caad18=((a,b)=>{const d=c(a).createShader(b>>>R);return p(d)?R:k(d)});b.wbg.__wbg_createTexture_9d0bb4d741b8ad76=(a=>{const b=c(a).createTexture();return p(b)?R:k(b)});b.wbg.__wbg_deleteBuffer_cdc6b9c73f54aff7=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_d8d7fc79ba83b256=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_9a2f85efe5cb3706=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_a883356c5034d482=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_a047ade0450ff0bf=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_5cf2070641fa2ed7=((a,b)=>{c(a).disable(b>>>R)});b.wbg.__wbg_disableVertexAttribArray_8dacd44e21adcaa2=((a,b)=>{c(a).disableVertexAttribArray(b>>>R)});b.wbg.__wbg_drawElements_3316ee0cd1117c2a=((a,b,d,e,f)=>{c(a).drawElements(b>>>R,d,e>>>R,f)});b.wbg.__wbg_enable_8965e69c596f0a94=((a,b)=>{c(a).enable(b>>>R)});b.wbg.__wbg_enableVertexAttribArray_2b0475db43533cf2=((a,b)=>{c(a).enableVertexAttribArray(b>>>R)});b.wbg.__wbg_getAttribLocation_a5a98d5272b01c0d=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_1e5ec1ec9e58b323=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_088d115a16ecbd7d=function(){return C(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?R:k(e)}),arguments)};b.wbg.__wbg_getParameter_bfab7f0b00c9d7fb=function(){return C(((a,b)=>{const d=c(a).getParameter(b>>>R);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_0b7af4ad85fa52a4=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/$+ T]=h;r()[b/$+ R]=g});b.wbg.__wbg_getProgramParameter_2a3735278367f8bc=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>R);return k(e)});b.wbg.__wbg_getShaderInfoLog_979aafa403ffb252=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/$+ T]=h;r()[b/$+ R]=g});b.wbg.__wbg_getShaderParameter_e8054f1d9026fb70=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>R);return k(e)});b.wbg.__wbg_getSupportedExtensions_4eb3a5f14f552ce5=(a=>{const b=c(a).getSupportedExtensions();return p(b)?R:k(b)});b.wbg.__wbg_getUniformLocation_688976233799a45a=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?R:k(f)});b.wbg.__wbg_linkProgram_9a2d12d120d99917=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_5ec932ebefd00149=((a,b,d)=>{c(a).pixelStorei(b>>>R,d)});b.wbg.__wbg_scissor_c8ec3b1e053f3756=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_f435f9b74440bb54=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_1f17358e51eb8069=((a,b,d,e)=>{c(a).texParameteri(b>>>R,d>>>R,e)});b.wbg.__wbg_uniform1i_9f94ef0ba6b3cc66=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_69ee217590f07278=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_019eb6df066fabf5=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_ca11984ee8843c0a=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>R,d,e>>>R,f!==R,g,h)});b.wbg.__wbg_viewport_6ebef187c89e2616=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_width_e0c6b79d8cdd8897=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_bed51746e072a118=(a=>{const b=c(a).height;return b});b.wbg.__wbg_top_98ff0408c018d25e=(a=>{const b=c(a).top;return b});b.wbg.__wbg_left_23a613d619fb4206=(a=>{const b=c(a).left;return b});b.wbg.__wbg_result_58251a5d230b00f6=function(){return C((a=>{const b=c(a).result;return k(b)}),arguments)};b.wbg.__wbg_setonload_500a3ab3ebc0147b=((a,b)=>{c(a).onload=c(b)});b.wbg.__wbg_new_9b551002cd49569b=function(){return C((()=>{const a=new FileReader();return k(a)}),arguments)};b.wbg.__wbg_readAsArrayBuffer_07e155f1a3cd4ac2=function(){return C(((a,b)=>{c(a).readAsArrayBuffer(c(b))}),arguments)};b.wbg.__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_width_2931aaedd21f1fff=(a=>{const b=c(a).width;return b});b.wbg.__wbg_setwidth_a667a942dba6656e=((a,b)=>{c(a).width=b>>>R});b.wbg.__wbg_height_0d36fbbeb60b0661=(a=>{const b=c(a).height;return b});b.wbg.__wbg_setheight_a747d440760fe5aa=((a,b)=>{c(a).height=b>>>R});b.wbg.__wbg_getContext_7c5944ea807bf5d3=function(){return C(((a,b,d)=>{const e=c(a).getContext(j(b,d));return p(e)?R:k(e)}),arguments)};b.wbg.__wbg_deltaX_84508d00a1050e70=(a=>{const b=c(a).deltaX;return b});b.wbg.__wbg_deltaY_64823169afb0335d=(a=>{const b=c(a).deltaY;return b});b.wbg.__wbg_deltaMode_1c680147cfdba8a5=(a=>{const b=c(a).deltaMode;return b});b.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const d=c(a)[b>>>R];return k(d)});b.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_new_ffc6d4d085022169=(()=>{const a=new L();return k(a)});b.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_90c26b09837aba1c=function(){return C(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_9fb8d994e1c0aaac=(()=>{const a=new Object();return k(a)});b.wbg.__wbg_self_f0e34d89f33b99fd=function(){return C((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_d3b084224f4774d7=function(){return C((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return C((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_35dfdd59a4da3e74=function(){return C((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbg_push_901f3914205d44de=((a,b)=>{const d=c(a).push(c(b));return d});b.wbg.__wbg_call_5da1969d7cd31ccd=function(){return C(((a,b,d)=>{const e=c(a).call(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_new_60f57089c7563e81=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=R;try{return D(d,c.b,a,b)}finally{c.a=d}};const e=new a0(d);return k(e)}finally{c.a=c.b=R}});b.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=a0.resolve(c(a));return k(b)});b.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_8371cc12cfedc5a2=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_b2f5b737836be06b=((a,b,d)=>{const e=new Int8Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_c370f7b5f8986669=((a,b,d)=>{const e=new Int16Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_be0a0b31d480f4b2=((a,b,d)=>{const e=new V(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=((a,b,d)=>{const e=new S(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new S(c(a));return k(b)});b.wbg.__wbg_set_2357bf09366ee480=((a,b,d)=>{c(a).set(c(b),d>>>R)});b.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newwithbyteoffsetandlength_099217381c451830=((a,b,d)=>{const e=new Uint16Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_7a23ee7b263abe07=((a,b,d)=>{const e=new Uint32Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_fa811509d2a67254=((a,b,d)=>{const e=new Float32Array(c(a),b>>>R,d>>>R);return k(e)});b.wbg.__wbg_buffer_261f267c3396c59b=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_set_759f75cd92b612d2=function(){return C(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ T]=g;r()[b/$+ R]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(j(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbindgen_closure_wrapper609=((a,b,c)=>{const d=v(a,b,117,w);return k(d)});b.wbg.__wbindgen_closure_wrapper837=((a,b,c)=>{const d=v(a,b,210,x);return k(d)});b.wbg.__wbindgen_closure_wrapper1226=((a,b,c)=>{const d=v(a,b,a1,y);return k(d)});b.wbg.__wbindgen_closure_wrapper1228=((a,b,c)=>{const d=v(a,b,a1,z);return k(d)});b.wbg.__wbindgen_closure_wrapper1230=((a,b,c)=>{const d=v(a,b,a1,A);return k(d)});b.wbg.__wbindgen_closure_wrapper1455=((a,b,c)=>{const d=v(a,b,400,B);return k(d)});return b});var r=(()=>{if(q===N||q.byteLength===R){q=new V(a.memory.buffer)};return q});var p=(a=>a===M||a===N);var c=(a=>b[a]);var D=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h004623a3e1cf3d0d(b,c,k(d),k(e))});var B=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h7fd5e3bffe7fbd3c(b,c,k(d))});var z=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbc220e8c5f1ebaef(b,c)});var t=(()=>{if(s===N||s.byteLength===R){s=new Float64Array(a.memory.buffer)};return s});var x=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__heb3af75e2d0ade46(b,c)});var e=(a=>{if(a<132)return;b[a]=d;d=a});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:T,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=R;try{return e(c,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var o=((a,b,c)=>{if(c===M){const c=m.encode(a);const d=b(c.length,T)>>>R;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,T)>>>R;const f=i();let g=R;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==R){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,T)>>>R;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var i=(()=>{if(h===N||h.byteLength===R){h=new S(a.memory.buffer)};return h});var j=((a,b)=>{a=a>>>R;return g.decode(i().subarray(a,a+ b))});var I=((b,c)=>{a=b.exports;K.__wbindgen_wasm_module=c;s=N;q=N;h=N;a.__wbindgen_start();return a});let a;const b=new L(128).fill(M);b.push(M,N,!0,!1);let d=b.length;const g=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){g.decode()};let h=N;let l=R;const m=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const n=typeof m.encodeInto===U?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=N;let s=N;class E{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=R;return a}free(){const b=this.__destroy_into_raw();a.__wbg_webhandle_free(b)}constructor(){const b=a.webhandle_new();this.__wbg_ptr=b>>>R;return this}start(b){const c=o(b,a.__wbindgen_malloc,a.__wbindgen_realloc);const d=l;const e=a.webhandle_start(this.__wbg_ptr,c,d);return f(e)}destroy(){a.webhandle_destroy(this.__wbg_ptr)}example(){a.webhandle_example(this.__wbg_ptr)}has_panicked(){const b=a.webhandle_has_panicked(this.__wbg_ptr);return b!==R}panic_message(){try{const d=a.__wbindgen_add_to_stack_pointer(-_);a.webhandle_panic_message(d,this.__wbg_ptr);var b=r()[d/$+ R];var c=r()[d/$+ T];let e;if(b!==R){e=j(b,c).slice();a.__wbindgen_free(b,c*T,T)};return e}finally{a.__wbindgen_add_to_stack_pointer(_)}}panic_callstack(){try{const d=a.__wbindgen_add_to_stack_pointer(-_);a.webhandle_panic_callstack(d,this.__wbg_ptr);var b=r()[d/$+ R];var c=r()[d/$+ T];let e;if(b!==R){e=j(b,c).slice();a.__wbindgen_free(b,c*T,T)};return e}finally{a.__wbindgen_add_to_stack_pointer(_)}}}export default K;export{E as WebHandle,J as initSync}
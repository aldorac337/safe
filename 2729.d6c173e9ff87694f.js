try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8f78401f-615d-4b96-9e36-cf52211e2705",e._sentryDebugIdIdentifier="sentry-dbid-8f78401f-615d-4b96-9e36-cf52211e2705")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2729],{1678:function(e,t,i){i.d(t,{U:function(){return o}});let o={URLS:{FAQ:"https://walletconnect.com/faq"}}},77743:function(e,t,i){i.d(t,{y0:function(){return h}});var o=i(60725),r=i(97059),a=i(3230),n=i(27837),s=i(88667),l=i(19165),c=i(14537),u=i(31507);async function d(){s.RouterController.push("ConnectingFarcaster");let e=a.ConnectorController.getAuthConnector();if(e&&!o.AccountController.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();o.AccountController.setFarcasterUrl(t,r.R.state.activeChain)}catch(e){s.RouterController.goBack(),l.SnackController.showError(e)}}async function p(e){s.RouterController.push("ConnectingSocial");let t=a.ConnectorController.getAuthConnector(),i=null;try{let a=setTimeout(()=>{throw Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(c.j.isTelegram()||(i=function(){try{return c.j.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw Error("Could not open social popup")}}()),i)o.AccountController.setSocialWindow(i,r.R.state.activeChain);else if(!c.j.isTelegram())throw Error("Could not create social popup");let{uri:n}=await t.provider.getSocialRedirectUri({provider:e});if(!n)throw i?.close(),Error("Could not fetch the social redirect uri");if(i&&(i.location.href=n),c.j.isTelegram()){u.M.setTelegramSocialProvider(e);let t=c.j.formatTelegramSocialLoginUrl(n);c.j.openHref(t,"_top")}clearTimeout(a)}}catch(e){i?.close(),l.SnackController.showError(e?.message)}}async function h(e){o.AccountController.setSocialProvider(e,r.R.state.activeChain),n.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await d():await p(e)}},62729:function(e,t,i){i.r(t),i.d(t,{AppKitAccountButton:function(){return k},AppKitButton:function(){return A},AppKitConnectButton:function(){return B},AppKitNetworkButton:function(){return H},W3mAccountButton:function(){return C},W3mAccountSettingsView:function(){return es},W3mAccountView:function(){return eq},W3mAllWalletsView:function(){return tO},W3mButton:function(){return T},W3mChooseAccountNameView:function(){return i3},W3mConnectButton:function(){return P},W3mConnectView:function(){return ik},W3mConnectWalletsView:function(){return oe},W3mConnectingExternalView:function(){return iP},W3mConnectingMultiChainView:function(){return iM},W3mConnectingWcBasicView:function(){return iZ},W3mConnectingWcView:function(){return iX},W3mDownloadsView:function(){return i1},W3mGetWalletView:function(){return i2},W3mNetworkButton:function(){return V},W3mNetworkSwitchView:function(){return ou},W3mNetworksView:function(){return ob},W3mProfileView:function(){return eJ},W3mRouter:function(){return q.A},W3mSIWXSignMessageView:function(){return oz},W3mSwitchActiveChainView:function(){return oy},W3mSwitchAddressView:function(){return e5},W3mUnsupportedChainView:function(){return oR},W3mWalletCompatibleNetworksView:function(){return oE},W3mWhatIsANetworkView:function(){return oC},W3mWhatIsAWalletView:function(){return i7}});var o=i(98670),r=i(94655),a=i(85282),n=i(97059),s=i(94498),l=i(8924),c=i(24979),u=i(60725),d=i(14537),p=i(26038),h=i(91527);i(9708),i(59365),i(39353),i(39543);var w=i(38573),g=i(82072),b=i(55202);i(74127),i(46361);var f=(0,o.iv)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,m=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let v=class extends o.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return(0,o.dy)`
      <button
        ?disabled=${this.disabled}
        class=${(0,a.o)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?g.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return(0,o.dy)` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?(0,o.dy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,o.dy)`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?(0,o.dy)`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:(0,o.dy)`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return(0,o.dy)`${e} ${t}`}return null}};v.styles=[w.ET,w.ZM,f],m([(0,r.Cb)()],v.prototype,"networkSrc",void 0),m([(0,r.Cb)()],v.prototype,"avatarSrc",void 0),m([(0,r.Cb)()],v.prototype,"balance",void 0),m([(0,r.Cb)({type:Boolean})],v.prototype,"isUnsupportedChain",void 0),m([(0,r.Cb)({type:Boolean})],v.prototype,"disabled",void 0),m([(0,r.Cb)({type:Boolean})],v.prototype,"loading",void 0),m([(0,r.Cb)()],v.prototype,"address",void 0),m([(0,r.Cb)()],v.prototype,"profileName",void 0),m([(0,r.Cb)()],v.prototype,"charsStart",void 0),m([(0,r.Cb)()],v.prototype,"charsEnd",void 0),v=m([(0,b.M)("wui-account-button")],v);var y=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class x extends o.oi{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.R.getAccountData(this.namespace)?.caipAddress,this.balanceVal=n.R.getAccountData(this.namespace)?.balance,this.balanceSymbol=n.R.getAccountData(this.namespace)?.balanceSymbol,this.profileName=n.R.getAccountData(this.namespace)?.profileName,this.profileImage=n.R.getAccountData(this.namespace)?.profileImage,this.network=n.R.getNetworkData(this.namespace)?.caipNetwork,this.networkImage=s.f.getNetworkImage(this.network),this.isSupported=!!l.OptionsController.state.allowUnsupportedChain||!n.R.state.activeChain||n.R.checkIfSupportedNetwork(n.R.state.activeChain)}firstUpdated(){let e=this.namespace;e?this.unsubscribe.push(n.R.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.balanceVal=e?.balance,this.balanceSymbol=e?.balanceSymbol,this.profileName=e?.profileName,this.profileImage=e?.profileImage},e),n.R.subscribeChainProp("networkState",t=>{this.network=t?.caipNetwork,this.isSupported=n.R.checkIfSupportedNetwork(e,t?.caipNetwork),this.networkImage=s.f.getNetworkImage(t?.caipNetwork)},e)):this.unsubscribe.push(c.W.subscribeNetworkImages(()=>{this.networkImage=s.f.getNetworkImage(this.network)}),n.R.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),u.AccountController.subscribeKey("balance",e=>this.balanceVal=e),u.AccountController.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),u.AccountController.subscribeKey("profileName",e=>this.profileName=e),u.AccountController.subscribeKey("profileImage",e=>this.profileImage=e),n.R.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=s.f.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.R.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!n.R.state.activeChain)return null;let e="show"===this.balance,t="string"!=typeof this.balanceVal;return(0,o.dy)`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!l.OptionsController.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,a.o)(d.j.getPlainAddress(this.caipAddress))}
        profileName=${(0,a.o)(this.profileName)}
        networkSrc=${(0,a.o)(this.networkImage)}
        avatarSrc=${(0,a.o)(this.profileImage)}
        balance=${e?d.j.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}async onClick(){await n.R.switchActiveNamespace(this.namespace),this.isSupported||l.OptionsController.state.allowUnsupportedChain?p.I.open():p.I.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await s.f.fetchNetworkImage(e?.assets?.imageId))}}y([(0,r.Cb)({type:Boolean})],x.prototype,"disabled",void 0),y([(0,r.Cb)()],x.prototype,"balance",void 0),y([(0,r.Cb)()],x.prototype,"charsStart",void 0),y([(0,r.Cb)()],x.prototype,"charsEnd",void 0),y([(0,r.Cb)()],x.prototype,"namespace",void 0),y([(0,r.SB)()],x.prototype,"caipAddress",void 0),y([(0,r.SB)()],x.prototype,"balanceVal",void 0),y([(0,r.SB)()],x.prototype,"balanceSymbol",void 0),y([(0,r.SB)()],x.prototype,"profileName",void 0),y([(0,r.SB)()],x.prototype,"profileImage",void 0),y([(0,r.SB)()],x.prototype,"network",void 0),y([(0,r.SB)()],x.prototype,"networkImage",void 0),y([(0,r.SB)()],x.prototype,"isSupported",void 0);let C=class extends x{};C=y([(0,h.Mo)("w3m-account-button")],C);let k=class extends x{};k=y([(0,h.Mo)("appkit-account-button")],k);var $=(0,o.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,R=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class S extends o.oi{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.R.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(n.R.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(n.R.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?(0,o.dy)`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${(0,a.o)(this.balance)}
            .charsStart=${(0,a.o)(this.charsStart)}
            .charsEnd=${(0,a.o)(this.charsEnd)}
            namespace=${(0,a.o)(this.namespace)}
          >
          </appkit-account-button>
        `:(0,o.dy)`
          <appkit-connect-button
            size=${(0,a.o)(this.size)}
            label=${(0,a.o)(this.label)}
            loadingLabel=${(0,a.o)(this.loadingLabel)}
            namespace=${(0,a.o)(this.namespace)}
          ></appkit-connect-button>
        `}}S.styles=$,R([(0,r.Cb)({type:Boolean})],S.prototype,"disabled",void 0),R([(0,r.Cb)()],S.prototype,"balance",void 0),R([(0,r.Cb)()],S.prototype,"size",void 0),R([(0,r.Cb)()],S.prototype,"label",void 0),R([(0,r.Cb)()],S.prototype,"loadingLabel",void 0),R([(0,r.Cb)()],S.prototype,"charsStart",void 0),R([(0,r.Cb)()],S.prototype,"charsEnd",void 0),R([(0,r.Cb)()],S.prototype,"namespace",void 0),R([(0,r.SB)()],S.prototype,"caipAddress",void 0);let T=class extends S{};T=R([(0,h.Mo)("w3m-button")],T);let A=class extends S{};A=R([(0,h.Mo)("appkit-button")],A);var I=(0,o.iv)`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,O=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let E=class extends o.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return(0,o.dy)`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?(0,o.dy)`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};E.styles=[w.ET,w.ZM,I],O([(0,r.Cb)()],E.prototype,"size",void 0),O([(0,r.Cb)({type:Boolean})],E.prototype,"loading",void 0),E=O([(0,b.M)("wui-connect-button")],E);var j=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class N extends o.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=p.I.state.open,this.loading=this.namespace?p.I.state.loadingNamespaceMap.get(this.namespace):p.I.state.loading,this.unsubscribe.push(p.I.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      <wui-connect-button
        size=${(0,a.o)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?p.I.close():this.loading||p.I.open({view:"Connect",namespace:this.namespace})}}j([(0,r.Cb)()],N.prototype,"size",void 0),j([(0,r.Cb)()],N.prototype,"label",void 0),j([(0,r.Cb)()],N.prototype,"loadingLabel",void 0),j([(0,r.Cb)()],N.prototype,"namespace",void 0),j([(0,r.SB)()],N.prototype,"open",void 0),j([(0,r.SB)()],N.prototype,"loading",void 0);let P=class extends N{};P=j([(0,h.Mo)("w3m-connect-button")],P);let B=class extends N{};B=j([(0,h.Mo)("appkit-connect-button")],B);var D=i(27837),M=(0,o.iv)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`,W=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let z=class extends o.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return(0,o.dy)`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?(0,o.dy)`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,o.dy)`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};z.styles=[w.ET,w.ZM,M],W([(0,r.Cb)()],z.prototype,"imageSrc",void 0),W([(0,r.Cb)({type:Boolean})],z.prototype,"isUnsupportedChain",void 0),W([(0,r.Cb)({type:Boolean})],z.prototype,"disabled",void 0),z=W([(0,b.M)("wui-network-button")],z);var L=(0,o.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,U=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class _ extends o.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=n.R.state.activeCaipNetwork,this.networkImage=s.f.getNetworkImage(this.network),this.caipAddress=n.R.state.activeCaipAddress,this.loading=p.I.state.loading,this.isSupported=!!l.OptionsController.state.allowUnsupportedChain||!n.R.state.activeChain||n.R.checkIfSupportedNetwork(n.R.state.activeChain),this.unsubscribe.push(c.W.subscribeNetworkImages(()=>{this.networkImage=s.f.getNetworkImage(this.network)}),n.R.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),n.R.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=s.f.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.R.checkIfSupportedNetwork(e.chainNamespace),s.f.fetchNetworkImage(e?.assets?.imageId)}),p.I.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){s.f.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!this.network||n.R.checkIfSupportedNetwork(this.network.chainNamespace);return(0,o.dy)`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!l.OptionsController.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,a.o)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||l.OptionsController.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(D.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.I.open({view:"Networks"}))}}_.styles=L,U([(0,r.Cb)({type:Boolean})],_.prototype,"disabled",void 0),U([(0,r.Cb)({type:String})],_.prototype,"label",void 0),U([(0,r.SB)()],_.prototype,"network",void 0),U([(0,r.SB)()],_.prototype,"networkImage",void 0),U([(0,r.SB)()],_.prototype,"caipAddress",void 0),U([(0,r.SB)()],_.prototype,"loading",void 0),U([(0,r.SB)()],_.prototype,"isSupported",void 0);let V=class extends _{};V=U([(0,h.Mo)("w3m-network-button")],V);let H=class extends _{};H=U([(0,h.Mo)("appkit-network-button")],H);var q=i(64799),K=i(49786),F=i(3230),G=i(49162),X=i(19165),Y=i(88667),Z=i(17409),J=i(53207);i(74930),i(96368),i(90400),i(81136),i(98168);var Q=(0,o.iv)`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`,ee=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let et=class extends o.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return(0,o.dy)`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};et.styles=[w.ET,w.ZM,Q],ee([(0,r.Cb)()],et.prototype,"label",void 0),ee([(0,r.Cb)()],et.prototype,"description",void 0),ee([(0,r.Cb)()],et.prototype,"icon",void 0),et=ee([(0,b.M)("wui-notice-card")],et),i(47526);var ei=i(41428),eo=i(31507),er=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ea=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.socialProvider=eo.M.getConnectedSocialProvider(),this.socialUsername=eo.M.getConnectedSocialUsername(),this.namespace=n.R.state.activeChain,this.unsubscribe.push(n.R.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=F.ConnectorController.getConnectorId(this.namespace),t=F.ConnectorController.getAuthConnector();if(!t||e!==K.b.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;let i=t.provider.getEmail()??"";return i||this.socialUsername?(0,o.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||Y.RouterController.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};er([(0,r.SB)()],ea.prototype,"namespace",void 0),ea=er([(0,h.Mo)("w3m-account-auth-button")],ea);var en=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let es=class extends o.oi{constructor(){super(),this.usubscribe=[],this.networkImages=c.W.state.networkImages,this.address=u.AccountController.state.address,this.profileImage=u.AccountController.state.profileImage,this.profileName=u.AccountController.state.profileName,this.network=n.R.state.activeCaipNetwork,this.preferredAccountTypes=u.AccountController.state.preferredAccountTypes,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(u.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes):p.I.close()}),u.AccountController.subscribeKey("preferredAccountTypes",e=>this.preferredAccountTypes=e),n.R.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.assets?.imageId??""];return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,a.o)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${h.Hg.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,a.o)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=this.network?.chainNamespace,t=F.ConnectorController.getConnectorId(e),i=F.ConnectorController.getAuthConnector();return n.R.checkIfNamesSupported()&&i&&t===K.b.CONNECTOR_ID.AUTH&&!this.profileName?(0,o.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=this.network?.chainNamespace,t=F.ConnectorController.getConnectorId(e),i=F.ConnectorController.getAuthConnector(),{origin:r}=location;return!i||t!==K.b.CONNECTOR_ID.AUTH||r.includes(G.bq.SECURE_SITE)?null:(0,o.dy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=n.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(d.j.copyToClopboard(this.address),X.SnackController.showSuccess("Address copied"))}catch{X.SnackController.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){let e=this.network?.chainNamespace,t=n.R.checkIfSmartAccountEnabled(),i=F.ConnectorController.getConnectorId(e);return F.ConnectorController.getAuthConnector()&&i===K.b.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=this.preferredAccountTypes?.[e]===ei.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),(0,o.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){Y.RouterController.push("ChooseAccountName")}async changePreferredAccountType(){let e=this.network?.chainNamespace,t=n.R.checkIfSmartAccountEnabled(),i=this.preferredAccountTypes?.[e]!==ei.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&t?ei.y_.ACCOUNT_TYPES.SMART_ACCOUNT:ei.y_.ACCOUNT_TYPES.EOA;F.ConnectorController.getAuthConnector()&&(this.loading=!0,await Z.ConnectionController.setPreferredAccountType(i,e),this.text=i===ei.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,J.S.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&Y.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await Z.ConnectionController.disconnect(),p.I.close()}catch{D.X.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),X.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){D.X.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Y.RouterController.push("UpgradeEmailWallet")}};en([(0,r.SB)()],es.prototype,"address",void 0),en([(0,r.SB)()],es.prototype,"profileImage",void 0),en([(0,r.SB)()],es.prototype,"profileName",void 0),en([(0,r.SB)()],es.prototype,"network",void 0),en([(0,r.SB)()],es.prototype,"preferredAccountTypes",void 0),en([(0,r.SB)()],es.prototype,"disconnecting",void 0),en([(0,r.SB)()],es.prototype,"loading",void 0),en([(0,r.SB)()],es.prototype,"switched",void 0),en([(0,r.SB)()],es.prototype,"text",void 0),es=en([(0,h.Mo)("w3m-account-settings-view")],es),i(43878),i(44492);var el=(0,o.iv)`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,ec=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eu=class extends o.oi{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){let e=n.R.state.activeChain,t=F.ConnectorController.getConnectorId(e)===K.b.CONNECTOR_ID.AUTH;return(0,o.dy)`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${t?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){if(e.target instanceof HTMLElement&&"copy-address"===e.target.id){this.onCopyClick?.(e);return}this.onProfileClick?.(e)}getIconTemplate(e){return(0,o.dy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};eu.styles=[w.ET,w.ZM,el],ec([(0,r.Cb)()],eu.prototype,"avatarSrc",void 0),ec([(0,r.Cb)()],eu.prototype,"profileName",void 0),ec([(0,r.Cb)()],eu.prototype,"address",void 0),ec([(0,r.Cb)()],eu.prototype,"icon",void 0),ec([(0,r.Cb)()],eu.prototype,"onProfileClick",void 0),ec([(0,r.Cb)()],eu.prototype,"onCopyClick",void 0),eu=ec([(0,b.M)("wui-profile-button-v2")],eu);var ed=(0,o.iv)`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,ep=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eh=class extends o.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let i=t===this.activeTab;return(0,o.dy)`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?(0,o.dy)`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let i=this.buttons[this.activeTab],o=this.buttons[e],r=i?.querySelector("wui-text"),a=o?.querySelector("wui-text"),n=o?.getBoundingClientRect(),s=a?.getBoundingClientRect();i&&r&&!t&&e!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&n&&s&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,o.animate([{width:`${n.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};eh.styles=[w.ET,w.ZM,ed],ep([(0,r.Cb)({type:Array})],eh.prototype,"tabs",void 0),ep([(0,r.Cb)()],eh.prototype,"onTabChange",void 0),ep([(0,r.Cb)({type:Array})],eh.prototype,"buttons",void 0),ep([(0,r.Cb)({type:Boolean})],eh.prototype,"disabled",void 0),ep([(0,r.Cb)()],eh.prototype,"localTabWidth",void 0),ep([(0,r.SB)()],eh.prototype,"activeTab",void 0),ep([(0,r.SB)()],eh.prototype,"isDense",void 0),eh=ep([(0,b.M)("wui-tabs")],eh),i(2035);var ew=(0,o.iv)`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,eg=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eb=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.caipAddress=u.AccountController.state.caipAddress,this.address=d.j.getPlainAddress(u.AccountController.state.caipAddress),this.allAccounts=u.AccountController.state.allAccounts,this.profileImage=u.AccountController.state.profileImage,this.profileName=u.AccountController.state.profileName,this.disconnecting=!1,this.balance=u.AccountController.state.balance,this.balanceSymbol=u.AccountController.state.balanceSymbol,this.features=l.OptionsController.state.features,this.namespace=n.R.state.activeChain,this.chainId=n.R.state.activeCaipNetwork?.id,this.unsubscribe.push(u.AccountController.subscribeKey("caipAddress",e=>{this.address=d.j.getPlainAddress(e),this.caipAddress=e}),u.AccountController.subscribeKey("balance",e=>this.balance=e),u.AccountController.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),u.AccountController.subscribeKey("profileName",e=>this.profileName=e),u.AccountController.subscribeKey("profileImage",e=>this.profileImage=e),l.OptionsController.subscribeKey("features",e=>this.features=e),u.AccountController.subscribeKey("allAccounts",e=>{this.allAccounts=e}),n.R.subscribeKey("activeChain",e=>this.namespace=e),n.R.subscribeKey("activeCaipNetwork",e=>{if(e){let[t,i]=e?.caipNetworkId?.split(":")||[];t&&i&&(this.namespace=t,this.chainId=i)}}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress)return null;let e=n.R.state.activeChain!==K.b.CHAIN.SOLANA&&this.allAccounts.length>1;return(0,o.dy)`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${d.j.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace)return null;let e=this.features?.onramp,t=G.bq.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return e&&t?(0,o.dy)`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||G.bq.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.features?.history&&G.bq.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?(0,o.dy)` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){let e=this.features?.swaps,t=n.R.state.activeChain===K.b.CHAIN.EVM;return e&&t?(0,o.dy)`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){let e=this.features?.send,t=n.R.state.activeChain===K.b.CHAIN.EVM;return e&&t?(0,o.dy)`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=n.R.state.activeChain,t=F.ConnectorController.getConnectorId(e),i=F.ConnectorController.getAuthConnector(),{origin:r}=location;return!i||t!==K.b.CONNECTOR_ID.AUTH||r.includes(G.bq.SECURE_SITE)?null:(0,o.dy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){Y.RouterController.push("SwitchAddress")}handleClickPay(){Y.RouterController.push("OnRampProviders")}handleClickSwap(){Y.RouterController.push("Swap")}handleClickSend(){Y.RouterController.push("WalletSend")}explorerBtnTemplate(){return u.AccountController.state.addressExplorerUrl?(0,o.dy)`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return(0,o.dy)`
      <wui-avatar
        alt=${(0,a.o)(this.caipAddress)}
        address=${(0,a.o)(d.j.getPlainAddress(this.caipAddress))}
        imageSrc=${(0,a.o)(null===this.profileImage?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?h.Hg.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):h.Hg.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=this.allAccounts.find(e=>e.address===this.address),t=u.AccountController.state.addressLabels.get(this.address);return"bip122"===this.namespace?this.btcAccountsTemplate():(0,o.dy)`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0,a.o)(this.address)}
        icon="${e?.type===ei.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&n.R.state.activeChain===K.b.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${(0,a.o)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,a.o)(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return(0,o.dy)`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${(0,a.o)(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${e=>u.AccountController.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[e]?.address||""}`,this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${h.Hg.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(d.j.copyToClopboard(this.address),X.SnackController.showSuccess("Address copied"))}catch{X.SnackController.showError("Failed to copy")}}onTransactions(){let e=n.R.state.activeChain;D.X.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:u.AccountController.state.preferredAccountTypes?.[e]===ei.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),Y.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await Z.ConnectionController.disconnect(),p.I.close()}catch{D.X.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),X.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let e=u.AccountController.state.addressExplorerUrl;e&&d.j.openHref(e,"_blank")}onGoToUpgradeView(){D.X.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Y.RouterController.push("UpgradeEmailWallet")}};eb.styles=ew,eg([(0,r.SB)()],eb.prototype,"caipAddress",void 0),eg([(0,r.SB)()],eb.prototype,"address",void 0),eg([(0,r.SB)()],eb.prototype,"allAccounts",void 0),eg([(0,r.SB)()],eb.prototype,"profileImage",void 0),eg([(0,r.SB)()],eb.prototype,"profileName",void 0),eg([(0,r.SB)()],eb.prototype,"disconnecting",void 0),eg([(0,r.SB)()],eb.prototype,"balance",void 0),eg([(0,r.SB)()],eb.prototype,"balanceSymbol",void 0),eg([(0,r.SB)()],eb.prototype,"features",void 0),eg([(0,r.SB)()],eb.prototype,"namespace",void 0),eg([(0,r.SB)()],eb.prototype,"chainId",void 0),eb=eg([(0,h.Mo)("w3m-account-default-widget")],eb);var ef=(0,o.iv)`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,em=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ev=class extends o.oi{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return(0,o.dy)`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ev.styles=[w.ET,ef],em([(0,r.Cb)()],ev.prototype,"dollars",void 0),em([(0,r.Cb)()],ev.prototype,"pennies",void 0),ev=em([(0,b.M)("wui-balance")],ev);var ey=(0,o.iv)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`,ex=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eC=class extends o.oi{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return(0,o.dy)`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};eC.styles=[w.ET,w.ZM,ey],ex([(0,r.Cb)()],eC.prototype,"text",void 0),ex([(0,r.Cb)()],eC.prototype,"icon",void 0),eC=ex([(0,b.M)("wui-icon-button")],eC);var ek=(0,o.iv)`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,e$=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eR=class extends o.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return(0,o.dy)`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?(0,o.dy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,o.dy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};eR.styles=[w.ET,w.ZM,ek],e$([(0,r.Cb)()],eR.prototype,"networkSrc",void 0),e$([(0,r.Cb)()],eR.prototype,"avatarSrc",void 0),e$([(0,r.Cb)()],eR.prototype,"profileName",void 0),e$([(0,r.Cb)()],eR.prototype,"address",void 0),e$([(0,r.Cb)()],eR.prototype,"icon",void 0),eR=e$([(0,b.M)("wui-profile-button")],eR);var eS=(0,o.iv)`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,eT=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eA=class extends o.oi{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,(0,o.dy)`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};eA.styles=[w.ET,w.ZM,eS],eT([(0,r.Cb)()],eA.prototype,"placement",void 0),eT([(0,r.Cb)()],eA.prototype,"variant",void 0),eT([(0,r.Cb)()],eA.prototype,"message",void 0),eA=eT([(0,b.M)("wui-tooltip")],eA);var eI=i(22953);let eO=e=>e&&e===K.b.CHAIN.EVM?eI.b.ACCOUNT_TABS:[];i(17215);var eE=(0,o.iv)`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let ej=class extends o.oi{render(){return(0,o.dy)`<w3m-activity-list page="account"></w3m-activity-list>`}};ej.styles=eE,ej=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.Mo)("w3m-account-activity-widget")],ej),i(9880),i(33533);var eN=(0,o.iv)`
  .contentContainer {
    height: 
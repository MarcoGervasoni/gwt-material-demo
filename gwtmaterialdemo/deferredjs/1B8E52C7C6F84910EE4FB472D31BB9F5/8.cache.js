$wnd.gwtmaterialdemo.runAsyncCallback8("function $addCloseHandler(this$static){\n  return $addHandler(this$static, new MaterialOverlay$1(this$static), TYPE_14?TYPE_14:(TYPE_14 = new GwtEvent$Type));\n}\n\nfunction $addOpenHandler(this$static){\n  return $addHandler(this$static, new MaterialOverlay$2(this$static), (!TYPE_15 && (TYPE_15 = new GwtEvent$Type) , TYPE_15));\n}\n\nfunction $close_0(this$static){\n  (body_1 == null && (body_1 = $wnd.$('body')) , body_1).attr('style', 'overflow: auto !important');\n  !!this$static.source && $reverseAnimate(this$static.animator);\n  fire_1(this$static, this$static);\n}\n\nfunction $open_0(this$static, source){\n  this$static.source = source;\n  $wnd.$('body').attr('style', 'overflow: hidden !important');\n  $setSourceElement(this$static.animator, ($clinit_DOM() , source.element_0));\n  $setTargetElement(this$static.animator, this$static.element_0);\n  $animate(this$static.animator);\n  fire_2(this$static, this$static);\n}\n\nfunction MaterialOverlay$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1807, 1, $intern_47, MaterialOverlay$1);\n_.onClose = function onClose_0(closeEvent){\n  $isEnabled_0(this.this$01) && $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 22, 0, [])), 'Overlay Closed', $intern_66, null);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlay$1_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlay/1', 1807);\nfunction MaterialOverlay$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1808, 1, $intern_93, MaterialOverlay$2);\n_.onOpen = function onOpen(openEvent){\n  $isEnabled_0(this.this$01) && $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 22, 0, [])), 'Overlay Opened', $intern_66, null);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlay$2_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlay/2', 1808);\nfunction OverlayPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(815, 61, $intern_53, OverlayPresenter);\n_.onReveal = function onReveal_15(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Overlay', 'Provides a meaningful transition of source widget to popup or overlay panel.', 'addins/scrollfire/OverlayView', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayPresenter', 815);\nfunction $lambda$0_42(this$static){\n  $open_0(this$static.overlay, this$static.btnOpenOverlay);\n}\n\nfunction $lambda$4_3(this$static){\n  $open_0(this$static.overlayEvents, this$static.btnOpenOverlayEvents);\n}\n\nfunction OverlayView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_8(new OverlayView_BinderImpl$Widgets(this)));\n  register_0(this.overlay, 2);\n  register_0(this.btnCloseOverlay, 1);\n  register_0(this.overlayEvents, 2);\n  register_0(this.btnCloseOverlayEvents, 1);\n  $addClickHandler(this.btnOpenOverlay, new OverlayView$lambda$0$Type(this));\n  $addClickHandler(this.btnCloseOverlay, new OverlayView$lambda$1$Type(this));\n  $addOpenHandler(this.overlayEvents);\n  $addCloseHandler(this.overlayEvents);\n  $addClickHandler(this.btnOpenOverlayEvents, new OverlayView$lambda$4$Type(this));\n  $addClickHandler(this.btnCloseOverlayEvents, new OverlayView$lambda$5$Type(this));\n}\n\ndefineClass(1091, 67, $intern_54, OverlayView);\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView', 1091);\nfunction OverlayView$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1092, 1, $intern_63, OverlayView$lambda$0$Type);\n_.onClick = function onClick_61(arg0){\n  $lambda$0_42(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$0$Type', 1092);\nfunction OverlayView$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1093, 1, $intern_63, OverlayView$lambda$1$Type);\n_.onClick = function onClick_62(arg0){\n  $close_0(this.$$outer_0.overlay);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$1$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$1$Type', 1093);\nfunction OverlayView$lambda$4$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1094, 1, $intern_63, OverlayView$lambda$4$Type);\n_.onClick = function onClick_63(arg0){\n  $lambda$4_3(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$4$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$4$Type', 1094);\nfunction OverlayView$lambda$5$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1095, 1, $intern_63, OverlayView$lambda$5$Type);\n_.onClick = function onClick_64(arg0){\n  $close_0(this.$$outer_0.overlayEvents);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$5$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$5$Type', 1095);\nfunction $build_f_HTMLPanel1_8(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow8, f_MaterialTitle3, overlay, f_MaterialLabel4, f_MaterialLabel5, btnCloseOverlay, btnOpenOverlay, f_PrettyPre6, sb, f_PrettyPre7, sb_0, f_MaterialTitle9, overlayEvents, f_MaterialLabel10, f_MaterialLabel11, btnCloseOverlayEvents, btnOpenOverlayEvents, f_PrettyPre12, sb_1;\n  f_HTMLPanel1 = new HTMLPanel($html4_5(this$static.domId0, this$static.domId1).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'Requires a source component when opening the overlay to transform it to overlay panel.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Basic'))).html_0)) , fire_5(f_MaterialTitle3, 'Basic') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (overlay = new MaterialOverlay , $add_9(overlay, (f_MaterialLabel4 = new MaterialLabel , $setTextAlign(f_MaterialLabel4, ($clinit_TextAlign() , CENTER_4)) , $setFontSize_1((!f_MaterialLabel4.fontSizeMixin && (f_MaterialLabel4.fontSizeMixin = new FontSizeMixin(f_MaterialLabel4)) , f_MaterialLabel4.fontSizeMixin), '2em') , $setText_5((!f_MaterialLabel4.textMixin && (f_MaterialLabel4.textMixin = new TextMixin(f_MaterialLabel4)) , f_MaterialLabel4.textMixin), 'This is an overlay') , fire_5(f_MaterialLabel4, 'This is an overlay') , f_MaterialLabel4.element_0.style['marginTop'] = ($clinit_Style$Unit() , '120.0px') , $setFontWeight(f_MaterialLabel4, ($clinit_Style$FontWeight() , LIGHTER)) , f_MaterialLabel4)) , $add_9(overlay, (f_MaterialLabel5 = new MaterialLabel , $setTextAlign(f_MaterialLabel5, CENTER_4) , f_MaterialLabel5.element_0.style['marginBottom'] = '40.0px' , $setText_5((!f_MaterialLabel5.textMixin && (f_MaterialLabel5.textMixin = new TextMixin(f_MaterialLabel5)) , f_MaterialLabel5.textMixin), 'Some content goes here') , fire_5(f_MaterialLabel5, 'Some content goes here') , f_MaterialLabel5)) , $add_9(overlay, (btnCloseOverlay = new MaterialButton , $setText_6(btnCloseOverlay.span_1, 'Close Overlay') , btnCloseOverlay.span_1.attached || $add_9(btnCloseOverlay, btnCloseOverlay.span_1) , this$static.owner.btnCloseOverlay = btnCloseOverlay , btnCloseOverlay)) , $setBackgroundColor(overlay, ($clinit_Color() , BLUE)) , $setTextAlign(overlay, CENTER_4) , $setTextColor(overlay, WHITE) , this$static.owner.overlay = overlay , overlay)) , $add_9(f_MaterialRow2, (btnOpenOverlay = new MaterialButton , $setText_6(btnOpenOverlay.span_1, 'Open Overlay') , btnOpenOverlay.span_1.attached || $add_9(btnOpenOverlay, btnOpenOverlay.span_1) , this$static.owner.btnOpenOverlay = btnOpenOverlay , btnOpenOverlay)) , $add_9(f_MaterialRow2, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += '\\u2003&lt;ma:overlay.MaterialOverlay ui:field=\"overlay\" textAlign=\"CENTER\" textColor=\"WHITE\"&gt;<br> \\u2003&lt;m:MaterialLabel textAlign=\"CENTER\" text=\"This is an overlay\" marginTop=\"120\" fontWeight=\"LIGHTER\" fontSize=\"2em\" /&gt;<br> \\u2003&lt;m:MaterialLabel textAlign=\"CENTER\" text=\"Some content goes here\" marginBottom=\"40\" /&gt;<br> \\u2003&lt;m:MaterialButton ui:field=\"btnCloseOverlay\" text=\"Close Overlay\" /&gt;<br> &lt;/ma:overlay.MaterialOverlay&gt;<br><br> &lt;m:MaterialButton ui:field=\"btnOpenOverlay\" text=\"Open Overlay\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-xml', true) , f_PrettyPre6)) , $add_9(f_MaterialRow2, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_0 = new StringBuilder , sb_0.string += '\\u2003btnOpenOverlay.addClickHandler(clickEvent -&gt; overlay.open(btnOpenOverlay));<br> btnCloseOverlay.addClickHandler(e -&gt; overlay.close());' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre7.element_0, 'lang-java', true) , f_PrettyPre7)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow8 = new MaterialRow , $add_9(f_MaterialRow8, (f_MaterialTitle9 = new MaterialTitle , $setText_12(f_MaterialTitle9.paragraph, 'We have provided open and close events') , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('Events'))).html_0) , fire_5(f_MaterialTitle9, 'Events') , f_MaterialTitle9)) , $add_9(f_MaterialRow8, (overlayEvents = new MaterialOverlay , $add_9(overlayEvents, (f_MaterialLabel10 = new MaterialLabel , $setTextAlign(f_MaterialLabel10, CENTER_4) , $setFontSize_1((!f_MaterialLabel10.fontSizeMixin && (f_MaterialLabel10.fontSizeMixin = new FontSizeMixin(f_MaterialLabel10)) , f_MaterialLabel10.fontSizeMixin), '2em') , $setText_5((!f_MaterialLabel10.textMixin && (f_MaterialLabel10.textMixin = new TextMixin(f_MaterialLabel10)) , f_MaterialLabel10.textMixin), 'This is an overlay') , fire_5(f_MaterialLabel10, 'This is an overlay') , f_MaterialLabel10.element_0.style['marginTop'] = '120.0px' , $setFontWeight(f_MaterialLabel10, LIGHTER) , f_MaterialLabel10)) , $add_9(overlayEvents, (f_MaterialLabel11 = new MaterialLabel , $setTextAlign(f_MaterialLabel11, CENTER_4) , f_MaterialLabel11.element_0.style['marginBottom'] = '40.0px' , $setText_5((!f_MaterialLabel11.textMixin && (f_MaterialLabel11.textMixin = new TextMixin(f_MaterialLabel11)) , f_MaterialLabel11.textMixin), 'Some content goes here') , fire_5(f_MaterialLabel11, 'Some content goes here') , f_MaterialLabel11)) , $add_9(overlayEvents, (btnCloseOverlayEvents = new MaterialButton , $setText_6(btnCloseOverlayEvents.span_1, 'Close Overlay') , btnCloseOverlayEvents.span_1.attached || $add_9(btnCloseOverlayEvents, btnCloseOverlayEvents.span_1) , this$static.owner.btnCloseOverlayEvents = btnCloseOverlayEvents , btnCloseOverlayEvents)) , $setBackgroundColor(overlayEvents, BLUE) , $setTextAlign(overlayEvents, CENTER_4) , $setTextColor(overlayEvents, WHITE) , this$static.owner.overlayEvents = overlayEvents , overlayEvents)) , $add_9(f_MaterialRow8, (btnOpenOverlayEvents = new MaterialButton , $setText_6(btnOpenOverlayEvents.span_1, 'Open Overlay') , btnOpenOverlayEvents.span_1.attached || $add_9(btnOpenOverlayEvents, btnOpenOverlayEvents.span_1) , this$static.owner.btnOpenOverlayEvents = btnOpenOverlayEvents , btnOpenOverlayEvents)) , $add_9(f_MaterialRow8, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb_1 = new StringBuilder , sb_1.string += '\\u2003overlayEvents.addOpenHandler(openEvent -&gt; MaterialToast.fireToast(\"Overlay Opened\"));<br> overla yEvents.addCloseHandler(closeEvent -&gt; MaterialToast.fireToast(\"Overlay Closed\"));' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-java', true) , f_PrettyPre12)) , setStyleName(f_MaterialRow8.element_0, 'code', true) , f_MaterialRow8), $get_0(this$static.domId1Element));\n  return f_HTMLPanel1;\n}\n\nfunction OverlayView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n}\n\ndefineClass(1463, 1, {}, OverlayView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView_BinderImpl/Widgets', 1463);\nfunction $html4_5(arg0, arg1){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$) {\n    result0 = new OverlayPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$) {\n    result = new OverlayView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$;\n}\n\ndefineClass(701, 1, $intern_101);\n_.onSuccess_0 = function onSuccess_9(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(8);\n\n//# sourceURL=gwtmaterialdemo-8.js\n")

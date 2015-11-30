$wnd.gwtmaterialdemo.runAsyncCallback2("function $initialize_0(this$static){\n  if (!this$static.initialized) {\n    $initialize_1(this$static.element);\n    this$static.initialized = true;\n  }\n}\n\nfunction $initialize_1(){\n  $wnd.stickyHeaders.load($wnd.jQuery('.subheader'));\n}\n\nfunction MaterialSubHeader(){\n  Div.call(this);\n  new MaterialIcon;\n  this.span_0 = new Span;\n  this.initialized = false;\n  $setClassName(this.element, 'subheader');\n}\n\ndefineClass(233, 91, $intern_44, MaterialSubHeader);\n_.onLoad = function onLoad_8(){\n  $initialize_0(this);\n}\n;\n_.initialized = false;\nvar Lgwt_material_design_addins_client_ui_MaterialSubHeader_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialSubHeader', 233);\nfunction SubHeadersPresenter(eventBus, view, proxy){\n  $clinit_SubHeadersPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(539, 50, $intern_37, SubHeadersPresenter);\n_.onReveal = function onReveal_3(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('SubHeaders', 'SubHeaders are special list tiles that delineate distinct sections of a list or grid list and are typically related to the current filtering or sorting criteria. Subheader tiles are either displayed inline with tiles or can be associated with content, for example, in an adjacent column.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_subheaders_SubHeadersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.subheaders', 'SubHeadersPresenter', 539);\nfunction SubHeadersView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_0(new SubHeadersView_BinderImpl$Widgets));\n}\n\ndefineClass(673, 53, $intern_38, SubHeadersView);\nvar Lgwt_material_design_demo_client_application_addins_subheaders_SubHeadersView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.subheaders', 'SubHeadersView', 673);\nfunction SubHeadersView_BinderImpl(){\n}\n\ndefineClass(847, 1, {}, SubHeadersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_subheaders_SubHeadersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.subheaders', 'SubHeadersView_BinderImpl', 847);\nfunction $build_f_MaterialPanel1_0(){\n  var f_MaterialPanel1, f_MaterialTitle2, f_PrettyPre3, f_MaterialTitle4, f_PrettyPre5, f_MaterialSubHeader6, f_MaterialCollection7, f_MaterialCollectionItem8, f_MaterialCollectionItem12, f_MaterialCollectionItem16, f_MaterialCollectionItem20, f_MaterialSubHeader24, f_MaterialCollection25, f_MaterialCollectionItem26, f_MaterialCollectionItem30, f_MaterialCollectionItem34, f_MaterialCollectionItem38, f_MaterialSubHeader42, f_MaterialCollection43, f_MaterialCollectionItem44, f_MaterialCollectionItem48, f_MaterialCollectionItem52, f_MaterialCollectionItem56, f_MaterialSubHeader60, f_MaterialCollection61, f_MaterialCollectionItem62, f_MaterialCollectionItem66, f_MaterialCollectionItem70, f_MaterialCollectionItem74, sb, sb_0, f_MaterialImage9, f_MaterialLabel10, f_MaterialLabel11, f_MaterialImage13, f_MaterialLabel14, f_MaterialLabel15, f_MaterialImage17, f_MaterialLabel18, f_MaterialLabel19, f_MaterialImage21, f_MaterialLabel22, f_MaterialLabel23, f_MaterialImage27, f_MaterialLabel28, f_MaterialLabel29, f_MaterialImage31, f_MaterialLabel32, f_MaterialLabel33, f_MaterialImage35, f_MaterialLabel36, f_MaterialLabel37, f_MaterialImage39, f_MaterialLabel40, f_MaterialLabel41, f_MaterialImage45, f_MaterialLabel46, f_MaterialLabel47, f_MaterialImage49, f_MaterialLabel50, f_MaterialLabel51, f_MaterialImage53, f_MaterialLabel54, f_MaterialLabel55, f_MaterialImage57, f_MaterialLabel58, f_MaterialLabel59, f_MaterialImage63, f_MaterialLabel64, f_MaterialLabel65, f_MaterialImage67, f_MaterialLabel68, f_MaterialLabel69, f_MaterialImage71, f_MaterialLabel72, f_MaterialLabel73, f_MaterialImage75, f_MaterialLabel76, f_MaterialLabel77;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_12(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML(f_MaterialTitle2.header.element, 'Addins Usage') , $setText_4(f_MaterialTitle2.paragraph, 'In every gwt-material-addins components you may require to add the following namespace to the <ui:UIBinder> element') , f_MaterialTitle2));\n  $add_12(f_MaterialPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += \"xmlns:m.addins='urn:import:gwt.material.design.addins.client.ui'\" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre3.element, 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML(f_MaterialTitle4.header.element, 'Usage') , f_MaterialTitle4));\n  $add_12(f_MaterialPanel1, (f_PrettyPre5 = new PrettyPre , $setHTML(f_PrettyPre5, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m.addins:MaterialSubHeader text=\"Unread Messages\" textColor=\"purple\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre5.element, 'lang-xml', true) , setStyleName(f_PrettyPre5.element, 'z-depth-1', true) , f_PrettyPre5));\n  $add_12(f_MaterialPanel1, (f_MaterialSubHeader6 = new MaterialSubHeader , f_MaterialSubHeader6.span_0.setText('Unread Messages') , $add_12(f_MaterialSubHeader6, f_MaterialSubHeader6.span_0) , $setTextColor(f_MaterialSubHeader6.colorsMixin, 'purple') , f_MaterialSubHeader6));\n  $add_12(f_MaterialPanel1, (f_MaterialCollection7 = new MaterialCollection , $add_12(f_MaterialCollection7, (f_MaterialCollectionItem8 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem8, (f_MaterialImage9 = new MaterialImage , $setType_6(f_MaterialImage9, ($clinit_ImageType() , CIRCLE)) , $setUrl_1(f_MaterialImage9, ($clinit_UriUtils() , new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg'))) , f_MaterialImage9)) , $add_12(f_MaterialCollectionItem8, (f_MaterialLabel10 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel10.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel10.fontSizeMixin, '1.2em') , f_MaterialLabel10)) , $add_12(f_MaterialCollectionItem8, (f_MaterialLabel11 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel11.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel11)) , $setOn(f_MaterialCollectionItem8.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem8, ($clinit_CollectionType() , AVATAR)) , f_MaterialCollectionItem8)) , $add_12(f_MaterialCollection7, (f_MaterialCollectionItem12 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem12, (f_MaterialImage13 = new MaterialImage , $setType_6(f_MaterialImage13, CIRCLE) , $setUrl_1(f_MaterialImage13, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage13)) , $add_12(f_MaterialCollectionItem12, (f_MaterialLabel14 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel14.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel14.fontSizeMixin, '1.2em') , f_MaterialLabel14)) , $add_12(f_MaterialCollectionItem12, (f_MaterialLabel15 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel15.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel15)) , $setOn(f_MaterialCollectionItem12.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem12, AVATAR) , f_MaterialCollectionItem12)) , $add_12(f_MaterialCollection7, (f_MaterialCollectionItem16 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem16, (f_MaterialImage17 = new MaterialImage , $setType_6(f_MaterialImage17, CIRCLE) , $setUrl_1(f_MaterialImage17, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage17)) , $add_12(f_MaterialCollectionItem16, (f_MaterialLabel18 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel18.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel18.fontSizeMixin, '1.2em') , f_MaterialLabel18)) , $add_12(f_MaterialCollectionItem16, (f_MaterialLabel19 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel19.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel19)) , $setOn(f_MaterialCollectionItem16.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem16, AVATAR) , f_MaterialCollectionItem16)) , $add_12(f_MaterialCollection7, (f_MaterialCollectionItem20 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem20, (f_MaterialImage21 = new MaterialImage , $setType_6(f_MaterialImage21, CIRCLE) , $setUrl_1(f_MaterialImage21, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage21)) , $add_12(f_MaterialCollectionItem20, (f_MaterialLabel22 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel22.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel22.fontSizeMixin, '1.2em') , f_MaterialLabel22)) , $add_12(f_MaterialCollectionItem20, (f_MaterialLabel23 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel23.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel23)) , $setOn(f_MaterialCollectionItem20.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem20, AVATAR) , f_MaterialCollectionItem20)) , f_MaterialCollection7));\n  $add_12(f_MaterialPanel1, (f_MaterialSubHeader24 = new MaterialSubHeader , f_MaterialSubHeader24.span_0.setText('Late Messages') , $add_12(f_MaterialSubHeader24, f_MaterialSubHeader24.span_0) , $setTextColor(f_MaterialSubHeader24.colorsMixin, 'red') , f_MaterialSubHeader24));\n  $add_12(f_MaterialPanel1, (f_MaterialCollection25 = new MaterialCollection , $add_12(f_MaterialCollection25, (f_MaterialCollectionItem26 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem26, (f_MaterialImage27 = new MaterialImage , $setType_6(f_MaterialImage27, CIRCLE) , $setUrl_1(f_MaterialImage27, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage27)) , $add_12(f_MaterialCollectionItem26, (f_MaterialLabel28 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel28.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel28.fontSizeMixin, '1.2em') , f_MaterialLabel28)) , $add_12(f_MaterialCollectionItem26, (f_MaterialLabel29 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel29.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel29)) , $setOn(f_MaterialCollectionItem26.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem26, AVATAR) , f_MaterialCollectionItem26)) , $add_12(f_MaterialCollection25, (f_MaterialCollectionItem30 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem30, (f_MaterialImage31 = new MaterialImage , $setType_6(f_MaterialImage31, CIRCLE) , $setUrl_1(f_MaterialImage31, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage31)) , $add_12(f_MaterialCollectionItem30, (f_MaterialLabel32 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel32.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel32.fontSizeMixin, '1.2em') , f_MaterialLabel32)) , $add_12(f_MaterialCollectionItem30, (f_MaterialLabel33 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel33.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel33)) , $setOn(f_MaterialCollectionItem30.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem30, AVATAR) , f_MaterialCollectionItem30)) , $add_12(f_MaterialCollection25, (f_MaterialCollectionItem34 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem34, (f_MaterialImage35 = new MaterialImage , $setType_6(f_MaterialImage35, CIRCLE) , $setUrl_1(f_MaterialImage35, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage35)) , $add_12(f_MaterialCollectionItem34, (f_MaterialLabel36 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel36.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel36.fontSizeMixin, '1.2em') , f_MaterialLabel36)) , $add_12(f_MaterialCollectionItem34, (f_MaterialLabel37 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel37.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel37)) , $setOn(f_MaterialCollectionItem34.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem34, AVATAR) , f_MaterialCollectionItem34)) , $add_12(f_MaterialCollection25, (f_MaterialCollectionItem38 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem38, (f_MaterialImage39 = new MaterialImage , $setType_6(f_MaterialImage39, CIRCLE) , $setUrl_1(f_MaterialImage39, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage39)) , $add_12(f_MaterialCollectionItem38, (f_MaterialLabel40 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel40.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel40.fontSizeMixin, '1.2em') , f_MaterialLabel40)) , $add_12(f_MaterialCollectionItem38, (f_MaterialLabel41 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel41.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel41)) , $setOn(f_MaterialCollectionItem38.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem38, AVATAR) , f_MaterialCollectionItem38)) , f_MaterialCollection25));\n  $add_12(f_MaterialPanel1, (f_MaterialSubHeader42 = new MaterialSubHeader , f_MaterialSubHeader42.span_0.setText('Read Messages') , $add_12(f_MaterialSubHeader42, f_MaterialSubHeader42.span_0) , $setTextColor(f_MaterialSubHeader42.colorsMixin, 'grey') , f_MaterialSubHeader42));\n  $add_12(f_MaterialPanel1, (f_MaterialCollection43 = new MaterialCollection , $add_12(f_MaterialCollection43, (f_MaterialCollectionItem44 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem44, (f_MaterialImage45 = new MaterialImage , $setType_6(f_MaterialImage45, CIRCLE) , $setUrl_1(f_MaterialImage45, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage45)) , $add_12(f_MaterialCollectionItem44, (f_MaterialLabel46 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel46.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel46.fontSizeMixin, '1.2em') , f_MaterialLabel46)) , $add_12(f_MaterialCollectionItem44, (f_MaterialLabel47 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel47.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel47)) , $setOn(f_MaterialCollectionItem44.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem44, AVATAR) , f_MaterialCollectionItem44)) , $add_12(f_MaterialCollection43, (f_MaterialCollectionItem48 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem48, (f_MaterialImage49 = new MaterialImage , $setType_6(f_MaterialImage49, CIRCLE) , $setUrl_1(f_MaterialImage49, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage49)) , $add_12(f_MaterialCollectionItem48, (f_MaterialLabel50 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel50.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel50.fontSizeMixin, '1.2em') , f_MaterialLabel50)) , $add_12(f_MaterialCollectionItem48, (f_MaterialLabel51 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel51.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel51)) , $setOn(f_MaterialCollectionItem48.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem48, AVATAR) , f_MaterialCollectionItem48)) , $add_12(f_MaterialCollection43, (f_MaterialCollectionItem52 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem52, (f_MaterialImage53 = new MaterialImage , $setType_6(f_MaterialImage53, CIRCLE) , $setUrl_1(f_MaterialImage53, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage53)) , $add_12(f_MaterialCollectionItem52, (f_MaterialLabel54 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel54.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel54.fontSizeMixin, '1.2em') , f_MaterialLabel54)) , $add_12(f_MaterialCollectionItem52, (f_MaterialLabel55 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel55.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel55)) , $setOn(f_MaterialCollectionItem52.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem52, AVATAR) , f_MaterialCollectionItem52)) , $add_12(f_MaterialCollection43, (f_MaterialCollectionItem56 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem56, (f_MaterialImage57 = new MaterialImage , $setType_6(f_MaterialImage57, CIRCLE) , $setUrl_1(f_MaterialImage57, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage57)) , $add_12(f_MaterialCollectionItem56, (f_MaterialLabel58 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel58.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel58.fontSizeMixin, '1.2em') , f_MaterialLabel58)) , $add_12(f_MaterialCollectionItem56, (f_MaterialLabel59 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel59.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel59)) , $setOn(f_MaterialCollectionItem56.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem56, AVATAR) , f_MaterialCollectionItem56)) , f_MaterialCollection43));\n  $add_12(f_MaterialPanel1, (f_MaterialSubHeader60 = new MaterialSubHeader , f_MaterialSubHeader60.span_0.setText('Archived Messages') , $add_12(f_MaterialSubHeader60, f_MaterialSubHeader60.span_0) , $setTextColor(f_MaterialSubHeader60.colorsMixin, 'pink') , f_MaterialSubHeader60));\n  $add_12(f_MaterialPanel1, (f_MaterialCollection61 = new MaterialCollection , $add_12(f_MaterialCollection61, (f_MaterialCollectionItem62 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem62, (f_MaterialImage63 = new MaterialImage , $setType_6(f_MaterialImage63, CIRCLE) , $setUrl_1(f_MaterialImage63, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage63)) , $add_12(f_MaterialCollectionItem62, (f_MaterialLabel64 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel64.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel64.fontSizeMixin, '1.2em') , f_MaterialLabel64)) , $add_12(f_MaterialCollectionItem62, (f_MaterialLabel65 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel65.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel65)) , $setOn(f_MaterialCollectionItem62.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem62, AVATAR) , f_MaterialCollectionItem62)) , $add_12(f_MaterialCollection61, (f_MaterialCollectionItem66 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem66, (f_MaterialImage67 = new MaterialImage , $setType_6(f_MaterialImage67, CIRCLE) , $setUrl_1(f_MaterialImage67, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage67)) , $add_12(f_MaterialCollectionItem66, (f_MaterialLabel68 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel68.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel68.fontSizeMixin, '1.2em') , f_MaterialLabel68)) , $add_12(f_MaterialCollectionItem66, (f_MaterialLabel69 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel69.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel69)) , $setOn(f_MaterialCollectionItem66.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem66, AVATAR) , f_MaterialCollectionItem66)) , $add_12(f_MaterialCollection61, (f_MaterialCollectionItem70 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem70, (f_MaterialImage71 = new MaterialImage , $setType_6(f_MaterialImage71, CIRCLE) , $setUrl_1(f_MaterialImage71, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage71)) , $add_12(f_MaterialCollectionItem70, (f_MaterialLabel72 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel72.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel72.fontSizeMixin, '1.2em') , f_MaterialLabel72)) , $add_12(f_MaterialCollectionItem70, (f_MaterialLabel73 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel73.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel73)) , $setOn(f_MaterialCollectionItem70.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem70, AVATAR) , f_MaterialCollectionItem70)) , $add_12(f_MaterialCollection61, (f_MaterialCollectionItem74 = new MaterialCollectionItem , $add_12(f_MaterialCollectionItem74, (f_MaterialImage75 = new MaterialImage , $setType_6(f_MaterialImage75, CIRCLE) , $setUrl_1(f_MaterialImage75, new SafeUriString('https://material.angularjs.org/latest/img/list/60.jpeg')) , f_MaterialImage75)) , $add_12(f_MaterialCollectionItem74, (f_MaterialLabel76 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel76.directionalTextHelper, 'Min Li Chan') , $setFontSize_0(f_MaterialLabel76.fontSizeMixin, '1.2em') , f_MaterialLabel76)) , $add_12(f_MaterialCollectionItem74, (f_MaterialLabel77 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel77.directionalTextHelper, 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.') , f_MaterialLabel77)) , $setOn(f_MaterialCollectionItem74.dismissableMixin, true) , $setType_4(f_MaterialCollectionItem74, AVATAR) , f_MaterialCollectionItem74)) , f_MaterialCollection61));\n  $setId_0(f_MaterialPanel1.idMixin, 'subheader-con');\n  return f_MaterialPanel1;\n}\n\nfunction SubHeadersView_BinderImpl$Widgets(){\n  var style;\n  style = (new SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_3);\n  $ensureInjected_8(style);\n}\n\ndefineClass(848, 1, {}, SubHeadersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_subheaders_SubHeadersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.subheaders', 'SubHeadersView_BinderImpl/Widgets', 848);\nfunction SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1132, 1, {}, SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_3;\nvar Lgwt_material_design_demo_client_application_addins_subheaders_SubHeadersView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.subheaders', 'SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1132);\nfunction $ensureInjected_8(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1133, 1, {}, SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_15(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_addins_subheaders_SubHeadersView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.subheaders', 'SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1133);\nfunction $clinit_SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_3 = new SubHeadersView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersPresenter$_annotation$$none$$) {\n    result = new SubHeadersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersView$_annotation$$none$$) {\n    result = new SubHeadersView(new SubHeadersView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersView$_annotation$$none$$;\n}\n\ndefineClass(467, 1, $intern_52);\n_.onSuccess_0 = function onSuccess_1(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$subheaders$SubHeadersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(2);\n\n//# sourceURL=gwtmaterialdemo-2.js\n")

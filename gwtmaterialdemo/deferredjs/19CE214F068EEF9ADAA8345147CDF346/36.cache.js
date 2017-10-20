$wnd.gwtmaterialdemo.runAsyncCallback36("defineClass(345, 1, $intern_20);\n_.loaded = function loaded_0(startIndex, data_0){\n  $setRowData(this, startIndex, data_0);\n  this.setLoadMask(false);\n}\n;\nfunction $add_17(this$static, list){\n  $addAll_1(this$static.data_0, list);\n}\n\nfunction $load_3(this$static, loadConfig, callback){\n  var ex, size_0, subList;\n  try {\n    size_0 = loadConfig.offset_0 + loadConfig.limit;\n    size_0 > this$static.data_0.array.length && (size_0 = this$static.data_0.array.length);\n    subList = size_0 == 0?new ArrayList:new AbstractList$SubList(this$static.data_0, loadConfig.offset_0, size_0);\n    $onSuccess_1(callback, new LoadResult_0(subList, loadConfig.offset_0, this$static.data_0.array.length));\n  }\n   catch ($e0) {\n    $e0 = toJava($e0);\n    if (instanceOf($e0, 111)) {\n      ex = $e0;\n      $log_0(this$static.logger, ($clinit_Level() , FINE), 'ListDataSource threw index out of bounds.', ex);\n      $clinit_GWT();\n    }\n     else \n      throw toJs($e0);\n  }\n}\n\nfunction ListDataSource(){\n  this.logger = getLogger(($ensureNamesAreInitialized(Lgwt_material_design_client_data_ListDataSource_2_classLit) , Lgwt_material_design_client_data_ListDataSource_2_classLit.typeName));\n  this.data_0 = new ArrayList;\n}\n\ndefineClass(1869, 1, {}, ListDataSource);\nvar Lgwt_material_design_client_data_ListDataSource_2_classLit = createForClass('gwt.material.design.client.data', 'ListDataSource', 1869);\nfunction $addAll_1(this$static, c){\n  var cArray, len;\n  checkCriticalPositionIndex(0, this$static.array.length);\n  cArray = clone_0(c.array, c.array.length);\n  len = cArray.length;\n  if (len == 0) {\n    return false;\n  }\n  insertTo_0(this$static.array, 0, cArray);\n  return true;\n}\n\nfunction $doLoad_0(this$static, offset, limit){\n  this$static.offset_0 = offset;\n  this$static.currentPage == (this$static.totalRows / this$static.limit | 0) + 1 & this$static.totalRows % this$static.limit > 0 && (limit = this$static.totalRows - offset);\n  $load_3(this$static.dataSource, new LoadConfig(offset, limit, this$static.table.view.sortContext, $getOpenCategories(this$static.table.view)), new MaterialDataPager$1(this$static, offset, limit));\n}\n\nfunction $gotoPage(this$static, page){\n  this$static.currentPage = page;\n  $doLoad_0(this$static, page * this$static.limit - this$static.limit, this$static.limit);\n}\n\nfunction $isExcess(this$static){\n  return this$static.totalRows % this$static.limit > 0;\n}\n\nfunction $lastPage(this$static){\n  this$static.totalRows % this$static.limit > 0?$gotoPage(this$static, (this$static.totalRows / this$static.limit | 0) + 1):$gotoPage(this$static, this$static.totalRows / this$static.limit | 0);\n  $setSelectedIndex_3(this$static.pageNumberSelection, this$static.currentPage - 1);\n}\n\nfunction $next_3(this$static){\n  ++this$static.currentPage;\n  $gotoPage(this$static, this$static.currentPage);\n}\n\nfunction $previous(this$static){\n  --this$static.currentPage;\n  $gotoPage(this$static, this$static.currentPage);\n}\n\nfunction $setDataSource(this$static, dataSource){\n  this$static.dataSource = dataSource;\n}\n\nfunction $setLimit_1(this$static, limit){\n  this$static.limit = limit;\n}\n\nfunction $setTable(this$static, table){\n  this$static.table = table;\n}\n\nfunction $updateRowsPerPage(this$static, limit){\n  if ((this$static.totalRows / this$static.currentPage | 0) < limit) {\n    this$static.totalRows % this$static.limit > 0?$gotoPage(this$static, (this$static.totalRows / this$static.limit | 0) + 1):$gotoPage(this$static, this$static.totalRows / this$static.limit | 0);\n    $setSelectedIndex_3(this$static.pageNumberSelection, this$static.currentPage - 1);\n    return;\n  }\n  $gotoPage(this$static, castTo($getValue_3(this$static.pageNumberSelection.listPages), 153).value_0);\n}\n\nfunction $updateUi(this$static){\n  var firstRow, lastRow;\n  $updatePageNumber(this$static.pageNumberSelection, this$static.totalRows, this$static.limit, this$static.currentPage);\n  firstRow = this$static.offset_0 + 1;\n  lastRow = this$static.totalRows % this$static.limit > 0 & this$static.currentPage == (this$static.totalRows / this$static.limit | 0) + 1?this$static.totalRows:this$static.offset_0 + this$static.limit;\n  $setText_6(this$static.actionsPanel.actionLabel, (firstRow == lastRow?valueOf_2(lastRow):firstRow + '-' + lastRow) + ' of ' + this$static.totalRows);\n  $setEnabled_0(this$static.actionsPanel.iconNext, true);\n  $setEnabled_0(this$static.actionsPanel.iconPrev, true);\n  this$static.offset_0 + this$static.limit < this$static.totalRows || $setEnabled_0(this$static.actionsPanel.iconNext, false);\n  this$static.offset_0 - this$static.limit >= 0 || $setEnabled_0(this$static.actionsPanel.iconPrev, false);\n}\n\nfunction MaterialDataPager(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['data-pager', 'row']));\n  this.offset_0 = 0;\n  this.limit = 0;\n  this.currentPage = 1;\n  this.totalRows = 0;\n  this.limitOptions = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_7, 102, 15, [5, 10, 20]);\n  this.actionsPanel = new PageActionsPanel(this);\n  this.pageNumberSelection = new PageNumberSelection(this);\n  this.pageRowSelection = new PageRowSelection(this);\n}\n\ndefineClass(1870, 25, $intern_61, MaterialDataPager);\n_.onLoad = function onLoad_60(){\n  $onLoad(this);\n  this.limit = this.limitOptions[0];\n  $add_9(this, this.pageNumberSelection);\n  $add_9(this, this.pageRowSelection);\n  $add_9(this, this.actionsPanel);\n  this.currentPage = 1;\n  $doLoad_0(this, this.limit - this.limit, this.limit);\n}\n;\n_.currentPage = 0;\n_.limit = 0;\n_.offset_0 = 0;\n_.totalRows = 0;\nvar Lgwt_material_design_client_ui_pager_MaterialDataPager_2_classLit = createForClass('gwt.material.design.client.ui.pager', 'MaterialDataPager', 1870);\nfunction $onSuccess_1(this$static, loadResult){\n  this$static.this$01.totalRows = loadResult.totalLength;\n  $setVisibleRange_0(this$static.this$01.table, this$static.val$offset2, this$static.val$finalLimit3);\n  $loaded_1(this$static.this$01.table, loadResult.offset_0, loadResult.data_0);\n  $updateUi(this$static.this$01);\n}\n\nfunction MaterialDataPager$1(this$0, val$offset, val$finalLimit){\n  this.this$01 = this$0;\n  this.val$offset2 = val$offset;\n  this.val$finalLimit3 = val$finalLimit;\n}\n\ndefineClass(1871, 1, {}, MaterialDataPager$1);\n_.val$finalLimit3 = 0;\n_.val$offset2 = 0;\nvar Lgwt_material_design_client_ui_pager_MaterialDataPager$1_2_classLit = createForClass('gwt.material.design.client.ui.pager', 'MaterialDataPager/1', 1871);\nfunction PageActionsPanel(pager){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['action-page-panel']));\n  this.actionLabel = new Span;\n  this.iconNext = new MaterialIcon_0(($clinit_IconType() , KEYBOARD_ARROW_RIGHT));\n  this.iconPrev = new MaterialIcon_0(KEYBOARD_ARROW_LEFT);\n  $setGrid((!this.gridMixin && (this.gridMixin = new GridMixin(this)) , this.gridMixin), 's12 m4 l3');\n  this.pager = pager;\n}\n\ndefineClass(1990, 25, $intern_61, PageActionsPanel);\n_.onLoad = function onLoad_61(){\n  $onLoad(this);\n  $setWaves(this.iconNext, ($clinit_WavesType() , DEFAULT_8));\n  $setCircle(this.iconNext);\n  $add_9(this, this.iconNext);\n  $add_9(this, this.actionLabel);\n  $setWaves(this.iconPrev, DEFAULT_8);\n  $setCircle(this.iconPrev);\n  $add_9(this, this.iconPrev);\n  $registerHandler_1(this, $addClickHandler(this.iconNext, new PageActionsPanel$lambda$0$Type(this)));\n  $registerHandler_1(this, $addClickHandler(this.iconPrev, new PageActionsPanel$lambda$1$Type(this)));\n}\n;\nvar Lgwt_material_design_client_ui_pager_PageActionsPanel_2_classLit = createForClass('gwt.material.design.client.ui.pager', 'PageActionsPanel', 1990);\nfunction PageActionsPanel$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1991, 1, $intern_64, PageActionsPanel$lambda$0$Type);\n_.onClick = function onClick_23(arg0){\n  $next_3(this.$$outer_0.pager);\n}\n;\nvar Lgwt_material_design_client_ui_pager_PageActionsPanel$lambda$0$Type_2_classLit = createForClass('gwt.material.design.client.ui.pager', 'PageActionsPanel/lambda$0$Type', 1991);\nfunction PageActionsPanel$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1992, 1, $intern_64, PageActionsPanel$lambda$1$Type);\n_.onClick = function onClick_24(arg0){\n  $previous(this.$$outer_0.pager);\n}\n;\nvar Lgwt_material_design_client_ui_pager_PageActionsPanel$lambda$1$Type_2_classLit = createForClass('gwt.material.design.client.ui.pager', 'PageActionsPanel/lambda$1$Type', 1992);\nfunction $lambda$0_37(this$static, event_0){\n  $gotoPage(this$static.pager, castTo(event_0.value_0, 153).value_0);\n}\n\nfunction $setSelectedIndex_3(this$static, index_0){\n  $setSelectedIndex_2(this$static.listPages, index_0);\n}\n\nfunction $setValue_28(this$static, value_0){\n  $setValue_21(this$static.listPages, value_0, false);\n}\n\nfunction $updatePageNumber(this$static, totalRows, limit, currentPage){\n  var i, pages;\n  $clear_9(this$static.listPages);\n  pages = $isExcess(this$static.pager)?(totalRows / limit | 0) + 1:totalRows / limit | 0;\n  for (i = 1; i <= pages; i++) {\n    $addItem_6(this$static.listPages, valueOf_2(i), true);\n  }\n  $setSelectedIndex_2(this$static.listPages, currentPage - 1);\n}\n\nfunction PageNumberSelection(pager){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['num-page-panel']));\n  this.pageLabel = new Span_1('Page');\n  this.listPages = new MaterialListValueBox;\n  this.pager = pager;\n}\n\ndefineClass(1993, 25, $intern_62, PageNumberSelection);\n_.getValue = function getValue_25(){\n  return castTo($getValue_3(this.listPages), 153);\n}\n;\n_.setValue_0 = function setValue_28(value_0){\n  $setValue_28(this, throwClassCastExceptionUnlessNull(value_0));\n}\n;\n_.onLoad = function onLoad_62(){\n  $onLoad(this);\n  $setGrid((!this.gridMixin && (this.gridMixin = new GridMixin(this)) , this.gridMixin), 's12 m4 l3');\n  $setOffset((!this.gridMixin && (this.gridMixin = new GridMixin(this)) , this.gridMixin), 'l3');\n  $add_9(this, this.listPages);\n  $add_9(this, this.pageLabel);\n  $registerHandler_1(this, $addHandler(this.listPages, new PageNumberSelection$lambda$0$Type(this), (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18)));\n}\n;\nvar Lgwt_material_design_client_ui_pager_PageNumberSelection_2_classLit = createForClass('gwt.material.design.client.ui.pager', 'PageNumberSelection', 1993);\nfunction PageNumberSelection$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1994, 1, $intern_45, PageNumberSelection$lambda$0$Type);\n_.onValueChange = function onValueChange_8(arg0){\n  $lambda$0_37(this.$$outer_0, arg0);\n}\n;\nvar Lgwt_material_design_client_ui_pager_PageNumberSelection$lambda$0$Type_2_classLit = createForClass('gwt.material.design.client.ui.pager', 'PageNumberSelection/lambda$0$Type', 1994);\nfunction $lambda$0_38(this$static, valueChangeEvent_0){\n  $setLimit_1(this$static.pager, castTo(valueChangeEvent_0.value_0, 153).value_0);\n  $updateRowsPerPage(this$static.pager, castTo(valueChangeEvent_0.value_0, 153).value_0);\n}\n\nfunction PageRowSelection(pager){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['rows-per-page-panel']));\n  this.rowsPerPageLabel = new Span_1('Rows per page');\n  this.listPageRows = new MaterialListValueBox;\n  this.pager = pager;\n}\n\ndefineClass(1995, 25, $intern_61, PageRowSelection);\n_.onLoad = function onLoad_63(){\n  var limitOption, limitOption$array, limitOption$index, limitOption$max;\n  $onLoad(this);\n  $setGrid((!this.gridMixin && (this.gridMixin = new GridMixin(this)) , this.gridMixin), 's12 m4 l3');\n  $add_9(this, this.listPageRows);\n  $add_9(this, this.rowsPerPageLabel);\n  $clear_9(this.listPageRows);\n  for (limitOption$array = this.pager.limitOptions , limitOption$index = 0 , limitOption$max = limitOption$array.length; limitOption$index < limitOption$max; ++limitOption$index) {\n    limitOption = limitOption$array[limitOption$index];\n    $addItem_6(this.listPageRows, valueOf_2(limitOption), true);\n  }\n  $registerHandler_1(this, $addHandler(this.listPageRows, new PageRowSelection$lambda$0$Type(this), (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18)));\n}\n;\nvar Lgwt_material_design_client_ui_pager_PageRowSelection_2_classLit = createForClass('gwt.material.design.client.ui.pager', 'PageRowSelection', 1995);\nfunction PageRowSelection$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1996, 1, $intern_45, PageRowSelection$lambda$0$Type);\n_.onValueChange = function onValueChange_9(arg0){\n  $lambda$0_38(this.$$outer_0, arg0);\n}\n;\nvar Lgwt_material_design_client_ui_pager_PageRowSelection$lambda$0$Type_2_classLit = createForClass('gwt.material.design.client.ui.pager', 'PageRowSelection/lambda$0$Type', 1996);\nfunction $loaded_1(this$static, startIndex, data_0){\n  this$static.view.loaded(startIndex, data_0);\n}\n\nfunction PagedDataTablePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(858, 61, $intern_54, PagedDataTablePresenter);\n_.onReveal = function onReveal_57(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Paged DataTable', 'Using MaterialDataPager, you can easily turn your datatable into paged datatable which is good for large and finite data sets.', 'datatable/paged/PagedDataTable', 'https://material.io/guidelines/components/data-tables.html'));\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTablePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTablePresenter', 858);\nfunction $lambda$2_26(this$static){\n  $clinit_GWT();\n  this$static.table.view.refresh();\n}\n\nfunction PagedDataTableView(){\n  var i, i0, k, people, rowIndex;\n  NavigatedView.call(this);\n  this.pager = new MaterialDataPager;\n  $initWidget_0(this, $build_f_MaterialRow1_4(new PagedDataTableView_BinderImpl$Widgets(this)));\n  rowIndex = 1;\n  people = new ArrayList;\n  for (k = 1; k <= 10; k++) {\n    for (i0 = 1; i0 <= 10; ++i0 , rowIndex++) {\n      $add_19(people, new Person(i0, 'Field ' + rowIndex, 'Field ' + i0, 'Field ' + rowIndex, 'No ' + i0, 'Category ' + k));\n    }\n  }\n  this.dataSource = new ListDataSource;\n  $add_17(this.dataSource, people);\n  $setTable(this.pager, this.table);\n  $setDataSource(this.pager, this.dataSource);\n  $setVisibleRange_0(this.table, 1, 10);\n  $add_9(this.table, this.pager);\n  $setRowFactory_0(this.table, new PersonRowFactory);\n  $setRenderer_0(this.table, new CustomRenderer);\n  $addColumn_4(this.table, new PagedDataTableView$1, 'First Name');\n  $addColumn_4(this.table, new PagedDataTableView$2, 'Last Name');\n  $addColumn_4(this.table, new PagedDataTableView$3, 'Phone');\n  for (i = 0; i < 8; i++) {\n    $addColumn_4(this.table, new PagedDataTableView$4(i), 'Column ' + i);\n  }\n  $addColumn_3(this.table, new PagedDataTableView$5);\n  $addHandler(this.table, new PagedDataTableView$lambda$0$Type, ($clinit_RowExpandingEvent() , TYPE_70));\n  $addHandler(this.table, new PagedDataTableView$lambda$1$Type, ($clinit_RowSelectEvent() , TYPE_72));\n  $addHandler(this.table, new PagedDataTableView$lambda$2$Type(this), ($clinit_ColumnSortEvent() , TYPE_58));\n  $addHandler(this.table, new PagedDataTableView$lambda$3$Type, ($clinit_CategoryOpenedEvent() , TYPE_57));\n  $addHandler(this.table, new PagedDataTableView$lambda$4$Type, ($clinit_CategoryClosedEvent() , TYPE_56));\n  $addHandler(this.table, new PagedDataTableView$lambda$5$Type, ($clinit_RowDoubleClickEvent() , TYPE_68));\n  this.table.view.longPressDuration = 400;\n  $addHandler(this.table, new PagedDataTableView$lambda$6$Type, ($clinit_RowLongPressEvent() , TYPE_71));\n  $addHandler(this.table, new PagedDataTableView$lambda$7$Type, ($clinit_RowShortPressEvent() , TYPE_73));\n}\n\ndefineClass(1229, 304, $intern_55, PagedDataTableView);\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView', 1229);\nfunction PagedDataTableView$1(){\n  TextColumn.call(this);\n}\n\ndefineClass(1230, 142, $intern_127, PagedDataTableView$1);\n_.getValue_0 = function getValue_42(object){\n  return castTo(object, 56).firstName;\n}\n;\n_.sortComparator_0 = function sortComparator_9(){\n  return new PagedDataTableView$1$lambda$0$Type;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/1', 1230);\nfunction PagedDataTableView$1$lambda$0$Type(){\n}\n\ndefineClass(1231, 1, {}, PagedDataTableView$1$lambda$0$Type);\n_.equals_0 = function equals_25(other){\n  return this === other;\n}\n;\n_.compare = function compare_12(arg0, arg1){\n  return $compareToIgnoreCase(castTo(castTo(arg0, 70).data_0, 56).firstName, castTo(castTo(arg1, 70).data_0, 56).firstName);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$1$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/1/lambda$0$Type', 1231);\nfunction PagedDataTableView$2(){\n  TextColumn.call(this);\n}\n\ndefineClass(1232, 142, $intern_127, PagedDataTableView$2);\n_.getValue_0 = function getValue_43(object){\n  return castTo(object, 56).lastName;\n}\n;\n_.sortComparator_0 = function sortComparator_10(){\n  return new PagedDataTableView$2$lambda$0$Type;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/2', 1232);\nfunction PagedDataTableView$2$lambda$0$Type(){\n}\n\ndefineClass(1233, 1, {}, PagedDataTableView$2$lambda$0$Type);\n_.equals_0 = function equals_26(other){\n  return this === other;\n}\n;\n_.compare = function compare_13(arg0, arg1){\n  return $compareToIgnoreCase(castTo(castTo(arg0, 70).data_0, 56).lastName, castTo(castTo(arg1, 70).data_0, 56).lastName);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$2$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/2/lambda$0$Type', 1233);\nfunction PagedDataTableView$3(){\n  TextColumn.call(this);\n}\n\ndefineClass(1234, 142, $intern_127, PagedDataTableView$3);\n_.getValue_0 = function getValue_44(object){\n  return castTo(object, 56).phone;\n}\n;\n_.hideOn_0 = function hideOn_3(){\n  return $clinit_HideOn() , HIDE_ON_MED_DOWN;\n}\n;\n_.numeric = function numeric_3(){\n  return true;\n}\n;\n_.sortComparator_0 = function sortComparator_11(){\n  return new PagedDataTableView$3$lambda$0$Type;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/3', 1234);\nfunction PagedDataTableView$3$lambda$0$Type(){\n}\n\ndefineClass(1235, 1, {}, PagedDataTableView$3$lambda$0$Type);\n_.equals_0 = function equals_27(other){\n  return this === other;\n}\n;\n_.compare = function compare_14(arg0, arg1){\n  return $compareToIgnoreCase(castTo(castTo(arg0, 70).data_0, 56).phone, castTo(castTo(arg1, 70).data_0, 56).phone);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$3$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/3/lambda$0$Type', 1235);\nfunction PagedDataTableView$4(val$index){\n  this.val$index2 = val$index;\n  TextColumn.call(this);\n}\n\ndefineClass(1236, 142, $intern_127, PagedDataTableView$4);\n_.getValue_0 = function getValue_45(object){\n  return castTo(object, 56).phone + ' ' + this.val$index2;\n}\n;\n_.sortComparator_0 = function sortComparator_12(){\n  return new PagedDataTableView$4$lambda$0$Type;\n}\n;\n_.val$index2 = 0;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$4_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/4', 1236);\nfunction PagedDataTableView$4$lambda$0$Type(){\n}\n\ndefineClass(1237, 1, {}, PagedDataTableView$4$lambda$0$Type);\n_.equals_0 = function equals_28(other){\n  return this === other;\n}\n;\n_.compare = function compare_15(arg0, arg1){\n  return $compareToIgnoreCase(castTo(castTo(arg0, 70).data_0, 56).phone, castTo(castTo(arg1, 70).data_0, 56).phone);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$4$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/4/lambda$0$Type', 1237);\nfunction $getValue_10(object){\n  var badge;\n  badge = new MaterialBadge;\n  $setText_7(badge, 'badge ' + object.id_0);\n  $setBackgroundColor(badge, ($clinit_Color() , BLUE));\n  $setLayoutPosition(badge, ($clinit_Style$Position() , RELATIVE));\n  return badge;\n}\n\nfunction PagedDataTableView$5(){\n  WidgetColumn.call(this);\n}\n\ndefineClass(1238, 134, $intern_128, PagedDataTableView$5);\n_.getValue_0 = function getValue_46(object){\n  return $getValue_10(castTo(object, 56));\n}\n;\n_.textAlign_0 = function textAlign_3(){\n  return $clinit_TextAlign() , CENTER_4;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$5_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/5', 1238);\nfunction PagedDataTableView$6(val$event, val$section){\n  this.val$event2 = val$event;\n  this.val$section3 = val$section;\n  Timer.call(this);\n}\n\ndefineClass(1239, 136, {}, PagedDataTableView$6);\n_.run = function run_12(){\n  var badge, btn, content_0, element, icon, textBox;\n  element = this.val$event2.expansion.row.find('.content').empty();\n  content_0 = new MaterialWidget_2(element);\n  badge = new MaterialBadge_0(($clinit_Color() , WHITE), BLUE);\n  ($clinit_DOM() , badge.element_0).style['position'] = ($clinit_Style$Position() , 'relative');\n  badge.element_0.style['right'] = ($clinit_Style$Unit() , '0.0px');\n  $setFontSize(badge, 12, PX);\n  $add_1(content_0, badge, content_0.element_0);\n  btn = new MaterialButton_1(($clinit_ButtonType() , RAISED), new MaterialIcon_0(($clinit_IconType() , FULLSCREEN_0)));\n  $add_1(content_0, btn, content_0.element_0);\n  textBox = new MaterialTextBox;\n  $setText_1(textBox.valueBoxBase, ' from an asynchronous');\n  ' from an asynchronous'.length != 0 && $addStyleName(textBox.label_1, 'active');\n  $setGwtDisplay(textBox, ($clinit_Style$Display() , INLINE_TABLE));\n  textBox.element_0.style['width'] = '200px';\n  $add_1(content_0, textBox, content_0.element_0);\n  icon = new MaterialIcon_0(CALL);\n  icon.element_0.style['position'] = 'relative';\n  icon.element_0.style['top'] = '12.0px';\n  $add_1(content_0, icon, content_0.element_0);\n  this.val$section3.css('display', 'none');\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$6_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/6', 1239);\nfunction PagedDataTableView$lambda$0$Type(){\n}\n\ndefineClass(1240, 1, $intern_129, PagedDataTableView$lambda$0$Type);\n_.onRowExpanding = function onRowExpanding_1(arg0){\n  var section;\n  section = arg0.expansion.overlay;\n  $schedule(new PagedDataTableView$6(arg0, section), $intern_9);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/lambda$0$Type', 1240);\nfunction PagedDataTableView$lambda$1$Type(){\n}\n\ndefineClass(1241, 1, $intern_130, PagedDataTableView$lambda$1$Type);\n_.onRowSelect = function onRowSelect_3(arg0){\n  $clinit_GWT();\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$lambda$1$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/lambda$1$Type', 1241);\nfunction PagedDataTableView$lambda$2$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1242, 1, $intern_131, PagedDataTableView$lambda$2$Type);\n_.onColumnSort = function onColumnSort_2(arg0){\n  $lambda$2_26(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$lambda$2$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/lambda$2$Type', 1242);\nfunction PagedDataTableView$lambda$3$Type(){\n}\n\ndefineClass(1243, 1, $intern_132, PagedDataTableView$lambda$3$Type);\n_.onCategoryOpened = function onCategoryOpened_2(arg0){\n  $clinit_GWT();\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$lambda$3$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/lambda$3$Type', 1243);\nfunction PagedDataTableView$lambda$4$Type(){\n}\n\ndefineClass(1244, 1, $intern_133, PagedDataTableView$lambda$4$Type);\n_.onCategoryClosed = function onCategoryClosed_2(arg0){\n  $clinit_GWT();\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$lambda$4$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/lambda$4$Type', 1244);\nfunction PagedDataTableView$lambda$5$Type(){\n}\n\ndefineClass(1245, 1, $intern_134, PagedDataTableView$lambda$5$Type);\n_.onRowDoubleClick = function onRowDoubleClick_1(arg0){\n  alert_0('Row Double Clicked: ' + castTo(arg0.model, 56).id_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$lambda$5$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/lambda$5$Type', 1245);\nfunction PagedDataTableView$lambda$6$Type(){\n}\n\ndefineClass(1246, 1, $intern_135, PagedDataTableView$lambda$6$Type);\n_.onRowLongPress = function onRowLongPress_1(arg0){\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$lambda$6$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/lambda$6$Type', 1246);\nfunction PagedDataTableView$lambda$7$Type(){\n}\n\ndefineClass(1247, 1, $intern_136, PagedDataTableView$lambda$7$Type);\n_.onRowShortPress = function onRowShortPress_1(arg0){\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView$lambda$7$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView/lambda$7$Type', 1247);\nfunction $build_f_MaterialRow1_4(this$static){\n  var f_MaterialRow1, f_MaterialColumn2, f_MaterialRow3, f_MaterialTitle4, btnGotoFirstPage, btnGotoLastPage, table, sb, f_PrettyPre6, sb_0;\n  f_MaterialRow1 = new MaterialRow;\n  $add_9(f_MaterialRow1, (f_MaterialColumn2 = new MaterialColumn , $add_9(f_MaterialColumn2, (f_MaterialRow3 = new MaterialRow , $add_9(f_MaterialRow3, (f_MaterialTitle4 = new MaterialTitle , $setScrollspy((!f_MaterialTitle4.scrollspyMixin && (f_MaterialTitle4.scrollspyMixin = new ScrollspyMixin(f_MaterialTitle4)) , f_MaterialTitle4.scrollspyMixin), 'data_pager') , $setText_12(f_MaterialTitle4.paragraph, 'We developed a pager embeded component to data table to provide a better pagination into your data set.') , $setInnerHTML($getElement(f_MaterialTitle4.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Pager'))).html_0)) , fire_5(f_MaterialTitle4, 'Pager') , f_MaterialTitle4)) , $add_9(f_MaterialRow3, (btnGotoFirstPage = new MaterialButton , ($clinit_DOM() , btnGotoFirstPage.element_0).style['marginRight'] = ($clinit_Style$Unit() , '12.0px') , $setText_6(btnGotoFirstPage.span_1, 'Go to first page') , btnGotoFirstPage.span_1.attached || $add_9(btnGotoFirstPage, btnGotoFirstPage.span_1) , $addClickHandler(btnGotoFirstPage, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnGotoFirstPage)) , $add_9(f_MaterialRow3, (btnGotoLastPage = new MaterialButton , $setText_6(btnGotoLastPage.span_1, 'Go to last page') , btnGotoLastPage.span_1.attached || $add_9(btnGotoLastPage, btnGotoLastPage.span_1) , $addClickHandler(btnGotoLastPage, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnGotoLastPage)) , $add_9(f_MaterialRow3, (table = new MaterialDataTable , $setUseCategories(table.view, false) , $setSelectionType_1(table, ($clinit_SelectionType() , MULTIPLE)) , $setShadow_0((!table.shadowMixin && (table.shadowMixin = new ShadowMixin(table)) , table.shadowMixin), 1) , $setUseStickyHeader(table.view, true) , table.view.useRowExpansion = true , table.element_0.style['marginTop'] = '20.0px' , $setHeight_0(table.view, '100%') , this$static.owner.table = table , table)) , $add_9(f_MaterialRow3, new HTMLPanel((sb = new StringBuilder , sb.string += '<blockquote> <p><b>getCurrentPage() - <\\/b>Get the current page.<\\/p> <p><b>getNumPages() - <\\/b>Get Total number of pages<\\/p> <p><b>next() - <\\/b>Go to next page<\\/p> <p><b>previous() - <\\/b>Go to Previos page<\\/p> <p><b>firstPage() - <\\/b>Go to First page<\\/p> <p><b>lastPage() - <\\/b>Go to Last page<\\/p> <p><b>useRowCountOptions=\"false\" - <\\/b>Disable the number of rows selection<\\/p> <p><b><\\/b><\\/p> <p><b><\\/b><\\/p> <p><b><\\/b><\\/p> <\\/blockquote>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0)) , $add_9(f_MaterialRow3, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb_0 = new StringBuilder , sb_0.string += '\\u2003// Declare your Pager <br> private MaterialDataPager pager; <br> // Set how many visible rows will contain the datatable. <br> table.setVisibleRange(1, 10); <br> // Pass your data table and your datasource ( List&lt;Person&gt; ) <br> pager = new MaterialDataPager&lt;&gt;(table, dataSource); <br> // Pager will build a selection of choices on how many number of rows should be displayed on the table <br> pager.setRowCountOptions(5, 10, 15, 20); <br> // Then add your pager into your data table <br> table.add(pager);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-java', true) , f_PrettyPre6.element_0.style['marginTop'] = '40.0px' , f_PrettyPre6)) , setStyleName(f_MaterialRow3.element_0, 'code', true) , f_MaterialRow3)) , $setGrid((!f_MaterialColumn2.gridMixin && (f_MaterialColumn2.gridMixin = new GridMixin(f_MaterialColumn2)) , f_MaterialColumn2.gridMixin), 's12') , f_MaterialColumn2));\n  return f_MaterialRow1;\n}\n\nfunction PagedDataTableView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new PagedDataTableView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new PagedDataTableView_BinderImpl$Widgets$2(this);\n  this.owner = owner;\n}\n\ndefineClass(1707, 1, {}, PagedDataTableView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView_BinderImpl/Widgets', 1707);\nfunction PagedDataTableView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1708, 1, $intern_64, PagedDataTableView_BinderImpl$Widgets$1);\n_.onClick = function onClick_263(event_0){\n  $gotoPage(this.this$11.owner.pager, 1);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView_BinderImpl/Widgets/1', 1708);\nfunction PagedDataTableView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1709, 1, $intern_64, PagedDataTableView_BinderImpl$Widgets$2);\n_.onClick = function onClick_264(event_0){\n  $lastPage(this.this$11.owner.pager);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_paged_PagedDataTableView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.paged', 'PagedDataTableView_BinderImpl/Widgets/2', 1709);\nfunction $get_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTablePresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTablePresenter$_annotation$$none$$) {\n    result0 = new PagedDataTablePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTableView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTablePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTablePresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTablePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTableView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTableView$_annotation$$none$$) {\n    result = new PagedDataTableView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTableView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTableView$_annotation$$none$$;\n}\n\ndefineClass(771, 1, $intern_102);\n_.onSuccess_0 = function onSuccess_37(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$datatable$paged$PagedDataTablePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction AbstractList$SubList(wrapped, fromIndex, toIndex){\n  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.array.length);\n  this.wrapped = wrapped;\n  this.fromIndex = fromIndex;\n  this.size_0 = toIndex - fromIndex;\n}\n\ndefineClass(640, 2418, $intern_85, AbstractList$SubList);\n_.add_4 = function add_45(index_0, element){\n  checkCriticalPositionIndex(index_0, this.size_0);\n  $add_18(this.wrapped, this.fromIndex + index_0, element);\n  ++this.size_0;\n}\n;\n_.get_2 = function get_77(index_0){\n  checkCriticalElementIndex(index_0, this.size_0);\n  return $get_3(this.wrapped, this.fromIndex + index_0);\n}\n;\n_.remove_3 = function remove_27(index_0){\n  var result;\n  checkCriticalElementIndex(index_0, this.size_0);\n  result = $remove_9(this.wrapped, this.fromIndex + index_0);\n  --this.size_0;\n  return result;\n}\n;\n_.set_0 = function set_4(index_0, element){\n  checkCriticalElementIndex(index_0, this.size_0);\n  return $set_1(this.wrapped, this.fromIndex + index_0, element);\n}\n;\n_.size_1 = function size_6(){\n  return this.size_0;\n}\n;\n_.fromIndex = 0;\n_.size_0 = 0;\nvar Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 640);\n$entry(onLoad_1)(36);\n\n//# sourceURL=gwtmaterialdemo-36.js\n")

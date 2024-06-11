import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { GalleriaModule } from 'primeng/galleria';
import { AvatarModule } from 'primeng/avatar';
import { CheckboxModule } from 'primeng/checkbox';
import { InplaceModule } from 'primeng/inplace';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ScrollerModule } from 'primeng/scroller';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { BadgeModule } from 'primeng/badge';
import { InputSwitchModule } from 'primeng/inputswitch';
import { StyleClassModule } from 'primeng/styleclass';
import { ChipModule } from 'primeng/chip';
import { CarouselModule } from 'primeng/carousel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ContextMenuModule } from 'primeng/contextmenu';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    DialogModule,
    EditorModule,
    MenubarModule,
    DataViewModule,
    FileUploadModule,
    TimelineModule,
    HttpClientModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    SliderModule,
    TableModule,
    ChipsModule,
    PaginatorModule ,
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    MultiSelectModule,
    ToastModule,
    ToolbarModule,
    GalleriaModule,
    OverlayPanelModule,
    AvatarModule,
    InplaceModule,
    SidebarModule,
    CheckboxModule,
    ProgressBarModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    ScrollerModule,
    TreeModule,
    TreeTableModule,
    AvatarGroupModule,
    TooltipModule,
    TieredMenuModule,
    RadioButtonModule,
    ToggleButtonModule,
    InputSwitchModule,
    StyleClassModule,
    BadgeModule,
    InputSwitchModule,
    ChipModule,
    CarouselModule,
    SplitButtonModule,
    ContextMenuModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    DialogModule,
    EditorModule,
    MenubarModule,
    DataViewModule,
    FileUploadModule,
    TimelineModule,
    HttpClientModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    SliderModule,
    TableModule,
    ChipsModule,
    PaginatorModule ,
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    MultiSelectModule,
    ToastModule,
    ToolbarModule,
    GalleriaModule,
    OverlayPanelModule,
    AvatarModule,
    InplaceModule,
    SidebarModule,
    CheckboxModule,
    ProgressBarModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    ScrollerModule,
    TreeModule,
    TreeTableModule,
    AvatarGroupModule,
    TooltipModule,
    TieredMenuModule,
    RadioButtonModule,
    ToggleButtonModule,
    InputSwitchModule,
    StyleClassModule,
    BadgeModule,
    InputSwitchModule,
    ChipModule,
    CarouselModule,
    SplitButtonModule,
    ContextMenuModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class PrimeNgModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: PrimeNgModule,
      providers: [],
    };
  }
}

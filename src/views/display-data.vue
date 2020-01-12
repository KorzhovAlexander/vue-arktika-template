<template>
  <div>
    <h2 class="content-block">Отображение данных</h2>

    <dx-data-grid
      class="dx-card wide-card"
      :data-source="dataSourceConfig"
      :focused-row-index="0"
      :show-borders="false"
      :focused-row-enabled="true"
      :column-auto-width="true"
      :column-hiding-enabled="true"
    >
      <dx-paging :page-size="10" />
      <dx-pager :show-page-size-selector="true" :show-info="true" />
      <dx-filter-row :visible="true" />

      <dx-column data-field="ID" :width="90" :hiding-priority="2" />

      <dx-column
        data-field="Task_Subject"
        caption="Тема"
        :width="190"
        :hiding-priority="8"
      />

      <dx-column
        data-field="Task_Status"
        caption="Статус"
        :hiding-priority="6"
      />

      <dx-column
        data-field="Task_Priority"
        caption="Приоритет"
        :hiding-priority="5"
      >
        <dx-lookup
          display-expr="name"
          value-expr="value"
          :data-source="priorities"
        />
      </dx-column>

      <dx-column
        data-field="ResponsibleEmployee.Employee_Full_Name"
        caption="Назначено"
        :allow-sorting="false"
        :hiding-priority="7"
      />

      <dx-column
        data-field="Task_Start_Date"
        caption="Дата начала"
        data-type="date"
        :hiding-priority="3"
      />

      <dx-column
        data-field="Task_Due_Date"
        caption="Дата окончания"
        data-type="date"
        :hiding-priority="4"
      />

      <dx-column
        data-field="Task_Priority"
        caption="Приоритет"
        :hiding-priority="1"
      />

      <dx-column
        data-field="Task_Completion"
        caption="Завершение"
        :hiding-priority="0"
      />
    </dx-data-grid>
  </div>
</template>

<script>
import {data} from "./Tasks";

import DxDataGrid, {
  DxColumn,
  DxFilterRow,
  DxLookup,
  DxPager,
  DxPaging
} from "devextreme-vue/data-grid";

const priorities = [
  { name: "Высокий", value: 4 },
  { name: "Неотложный", value: 3 },
  { name: "Нормальный", value: 2 },
  { name: "Нихкий", value: 1 }
];

export default {
  data() {
    return {
      priorities,
      dataSourceConfig: data
    };
  },
  created() {
  },
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxLookup,
    DxPager,
    DxPaging
  }
};
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded-md w-[500px]">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">选择导入类型</h2>
        <button class="text-gray-500" @click="closeModal">
          <XIcon class="w-6 h-6" />
        </button>
      </div>
      <div class="p-4 border border-gray-200 rounded-md mb-6">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold">安卓终端</h3>
          <CircleCheckIcon class="w-6 h-6 text-blue-500" />
        </div>
        <p class="text-gray-600">入库到账号列表（安卓终端），采用安卓终端技术，可登录安卓环境和苹果环境</p>
      </div>
      <div class="mb-6">
        <p class="text-gray-600 mb-2">账户类型（类型与实际账号不一致会导致登录失败）</p>
        <div class="flex gap-4">
          <button
            :class="`flex-1 p-4 border rounded-md ${selectedAccountType === 'personal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`"
            @click="setSelectedAccountType('personal')"
          >
            <div class="flex justify-between items-center">
              <span>个人号</span>
              <CircleCheckIcon v-if="selectedAccountType === 'personal'" class="w-6 h-6 text-blue-500" />
            </div>
          </button>
          <button
            :class="`flex-1 p-4 border rounded-md ${selectedAccountType === 'business' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`"
            @click="setSelectedAccountType('business')"
          >
            <div class="flex justify-between items-center">
              <span>商业号</span>
              <CircleCheckIcon v-if="selectedAccountType === 'business'" class="w-6 h-6 text-blue-500" />
            </div>
          </button>
        </div>
      </div>
      <div class="flex justify-end">
        <el-button>下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import './const.css'
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import CircleCheckIcon from '@/components/icons/CircleCheckIcon.vue'
import XIcon from '@/components/icons/XIcon.vue'

const selectedAccountType = ref('personal')

function setSelectedAccountType(type) {
  selectedAccountType.value = type
}

function closeModal() {
  // 实现关闭模态框的逻辑
  // 关闭模态框时重置选中的账户类型
  selectedAccountType.value = 'personal'
}
</script>
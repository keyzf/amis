define('docs/renderers/Form/Combo.md', function(require, exports, module) {

  module.exports = {
    "html": "<h3><a class=\"anchor\" name=\"combo\" href=\"#combo\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Combo</h3><p>组合模式，支持自由组合多个表单项。当设置成单选时数据格式为对象，当设置成多选时数据格式为数组，数组成员是对象（flat 模式可以直接是某个表单单项的数值）。</p>\n<ul>\n<li><code>type</code> 请设置成 <code>combo</code></li>\n<li><code>multiple</code> 默认为 <code>false</code> 配置是否为多选模式</li>\n<li><code>controls</code> 配置组合成员，所有成员都是横向展示，可以是任意 <a href=\"/amis/docs/renderers/Form/FormItem\">FormItem</a></li>\n<li><code>controls[x].columnClassName</code> 列的类名，可以用它配置列宽度。默认平均分配。</li>\n<li><code>controls[x].unique</code> 设置当前列值是否唯一，即不允许重复选择。</li>\n<li><code>maxLength</code> 当 multiple 为 true 的时候启用，设置可以最大项数。</li>\n<li><code>flat</code> 默认为 <code>false</code>, 是否将结果扁平化(去掉 name),只有当 controls 的 length 为 1 且 multiple 为 true 的时候才有效。</li>\n<li><code>joinValues</code> 默认为 <code>true</code> 当扁平化开启的时候，是否用分隔符的形式发送给后端，否则采用 array 的方式。</li>\n<li><code>delimiter</code> 当扁平化开启并且 joinValues 为 true 时，用什么分隔符。</li>\n<li><code>multiLine</code> 默认是横着展示一排，设置以后竖着展示</li>\n<li><code>addable</code> 是否可新增。</li>\n<li><code>removable</code> 是否可删除</li>\n<li><code>itemRemovableOn</code> 判断单条是否可删除，类型为表达式</li>\n<li><code>deleteApi</code> 如果配置了，则删除前会发送一个 api，请求成功才完成删除！</li>\n<li><code>deleteConfirmText</code> 默认为 <code>确认要删除？</code>，当配置 <code>deleteApi</code> 才生效！删除时用来做用户确认！</li>\n<li><code>draggable</code> 默认为 <code>false</code>, 是否可以拖动排序, 需要注意的是当启用拖动排序的时候，会多一个\\$id 字段</li>\n<li><code>draggableTip</code> 可拖拽的提示文字，默认为：<code>&quot;可通过拖动每行中的【交换】按钮进行顺序调整&quot;</code></li>\n<li><code>addButtonText</code> 新增按钮文字，默认为 <code>&quot;新增&quot;</code>。</li>\n<li><code>minLength</code> 限制最小长度。</li>\n<li><code>maxLength</code> 限制最大长度。</li>\n<li><code>scaffold</code> 单组表单项初始值。默认为 <code>{}</code>。</li>\n<li><code>canAccessSuperData</code> 指定是否可以自动获取上层的数据并映射到表单项上，默认是<code>false</code>。</li>\n<li><code>conditions</code> 数组的形式包含所有条件的渲染类型，单个数组内的<code>test</code> 为判断条件，数组内的<code>controls</code>为符合该条件后渲染的<code>schema</code></li>\n<li><code>typeSwitchable</code> 是否可切换条件，配合<code>conditions</code>使用</li>\n<li><code>formClassName</code> 单组表单项的类名</li>\n<li><code>noBorder</code> 单组表单项是否有边框</li>\n<li><code>strictMode</code> 默认为严格模式，设置为 false 时，当其他表单项更新是，里面的表单项也可以及时获取，否则不会。</li>\n<li><code>syncFields</code> 配置同步字段。只有 strictMode 为 false 时有效。如果 combo 层级比较深，底层的获取外层的数据可能不同步。但是给 combo 配置这个属性就能同步下来。输入格式：<code>[&quot;os&quot;]</code></li>\n<li><strong>还有更多通用配置请参考</strong> <a href=\"/amis/docs/renderers/Form/FormItem\">FormItem</a></li>\n</ul>\n<h4><a class=\"anchor\" name=\"%E5%8D%95%E8%A1%8C%E6%A8%A1%E5%BC%8F\" href=\"#%E5%8D%95%E8%A1%8C%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>单行模式</h4><div class=\"amis-preview\" style=\"height: 650px\"><script type=\"text/schema\" height=\"650\" scope=\"form\">[\n{\n  \"type\": \"combo\",\n  \"name\": \"combo\",\n  \"label\": \"单选组合项\",\n  \"controls\": [\n    {\n      \"name\": \"a\",\n      \"type\": \"text\"\n    },\n    {\n      \"name\": \"b\",\n      \"type\": \"select\",\n      \"options\": [\"a\", \"b\", \"c\"]\n    }\n  ]\n},\n{\n  \"type\": \"static\",\n  \"name\": \"combo\",\n  \"label\": \"当前值\"\n},\n\n{\n  \"type\": \"combo\",\n  \"name\": \"combo2\",\n  \"label\": \"多选组合项\",\n  \"multiple\": true,\n  \"draggable\": true,\n  \"controls\": [\n    {\n      \"label\": \"字段1\",\n      \"name\": \"a\",\n      \"type\": \"text\"\n    },\n    {\n      \"label\": \"字段2\",\n      \"name\": \"b\",\n      \"type\": \"select\",\n      \"options\": [\"a\", \"b\", \"c\"],\n      \"unique\": true\n    }\n  ]\n},\n{\n  \"type\": \"static\",\n  \"name\": \"combo2\",\n  \"label\": \"当前值\"\n}\n]\n</script></div>\n<h4><a class=\"anchor\" name=\"%E5%A4%9A%E8%A1%8C%E6%A8%A1%E5%BC%8F-\" href=\"#%E5%A4%9A%E8%A1%8C%E6%A8%A1%E5%BC%8F-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>多行模式。</h4><div class=\"amis-preview\" style=\"height: 650px\"><script type=\"text/schema\" height=\"650\" scope=\"form\">[\n{\n  \"type\": \"combo\",\n  \"name\": \"combo\",\n  \"label\": \"多选组合form\",\n  \"multiple\": true,\n  \"multiLine\": true,\n  \"controls\": [\n      {\n        \"label\": \"字段1\",\n        \"name\": \"a\",\n        \"type\": \"text\"\n      },\n      {\n        \"label\": \"字段2\",\n        \"name\": \"b\",\n        \"type\": \"select\",\n        \"options\": [\"a\", \"b\", \"c\"]\n      }\n    ]\n\n},\n{\n  \"type\": \"static\",\n  \"name\": \"combo\",\n  \"label\": \"当前值\"\n},\n\n{\n  \"type\": \"combo\",\n  \"name\": \"xxx\",\n  \"label\": \"单选组合form\",\n  \"multiLine\": true,\n  \"controls\": [\n    {\n      \"name\": \"a\",\n      \"type\": \"text\"\n    },\n    {\n      \"name\": \"b\",\n      \"type\": \"select\",\n      \"options\": [\"a\", \"b\", \"c\"]\n    }\n  ]\n},\n{\n  \"type\": \"static\",\n  \"name\": \"xxx\",\n  \"label\": \"当前值\"\n}\n\n]\n</script></div>\n<h4><a class=\"anchor\" name=\"%E6%9D%A1%E4%BB%B6%E5%88%86%E6%94%AF\" href=\"#%E6%9D%A1%E4%BB%B6%E5%88%86%E6%94%AF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>条件分支</h4><p>默认 Combo 渲染的成员是固定表单项的，成员的类型时一致，如果不一致怎么办？这里可以设置条件分支来给不同的成员设置不同的表单项。</p>\n<p>如下面的栗子，定义了两种类型：文本和数字，用户新增的时候可以选择是新增文本还是数字。区分是文字和数字的方式是根据成员数据中的 type 字段来决定。</p>\n<div class=\"amis-preview\" style=\"height: 650px\"><script type=\"text/schema\" height=\"650\" scope=\"form-item\">{\n  \"type\": \"combo\",\n  \"name\": \"combo-conditions2\",\n  \"label\": \"多选\",\n  \"value\": [\n    {\n      \"type\": \"text\"\n    }\n  ],\n  \"multiLine\": true,\n  \"multiple\": true,\n  \"typeSwitchable\": false,\n  \"conditions\": [\n    {\n      \"label\": \"文本\",\n      \"test\": \"this.type === \\\"text\\\"\",\n      \"scaffold\": {\n        \"type\": \"text\",\n        \"label\": \"文本\",\n        \"name\": \"\"\n      },\n      \"controls\": [\n        {\n          \"label\": \"名称\",\n          \"name\": \"label\",\n          \"type\": \"text\"\n        },\n        {\n          \"label\": \"字段名\",\n          \"name\": \"name\",\n          \"type\": \"text\"\n        }\n      ]\n    },\n    {\n      \"label\": \"数字\",\n      \"test\": \"this.type === \\\"number\\\"\",\n      \"scaffold\": {\n        \"type\": \"number\",\n        \"label\": \"数字\",\n        \"name\": \"\"\n      },\n      \"controls\": [\n        {\n          \"label\": \"名称\",\n          \"name\": \"label\",\n          \"type\": \"text\"\n        },\n        {\n          \"label\": \"字段名\",\n          \"name\": \"name\",\n          \"type\": \"text\"\n        },\n        {\n          \"label\": \"最小值\",\n          \"name\": \"min\",\n          \"type\": \"number\"\n        },\n        {\n          \"label\": \"最大值\",\n          \"name\": \"max\",\n          \"type\": \"number\"\n        },\n        {\n          \"label\": \"步长\",\n          \"name\": \"step\",\n          \"type\": \"number\"\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<ul>\n<li><code>conditions</code> Array&lt;Condition&gt; 数组，每个成员是一种类型</li>\n<li><code>conditions[x].label</code> 类型名称</li>\n<li><code>conditions[x].test</code> 表达式，目标成员数据是否属于这个类型？</li>\n<li><code>conditions[x].scaffold</code> 初始数据，当新增的时候直接使用此数据。</li>\n<li><code>conditions[x].controls</code> 该类型的表单设置。</li>\n<li><code>typeSwitchable</code> 类型是否允许切换，如果设置成 true 会多一个类型切换的按钮。</li>\n</ul>\n<h4><a class=\"anchor\" name=\"tabs-%E6%A8%A1%E5%BC%8F\" href=\"#tabs-%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Tabs 模式</h4><p>默认成员是一个一个排列的，如果数据比较多优点让人眼花缭乱。所以 Combo 支持了 tabs 的排列方式。</p>\n<div class=\"amis-preview\" style=\"height: 550px\"><script type=\"text/schema\" height=\"550\" scope=\"form-item\">{\n  \"type\": \"combo\",\n  \"name\": \"combo101\",\n  \"label\": \"组合多条多行\",\n  \"multiple\": true,\n  \"multiLine\": true,\n  \"value\": [\n    {}\n  ],\n  \"tabsMode\": true,\n  \"tabsStyle\": \"card\",\n  \"maxLength\": 3,\n  \"controls\": [\n    {\n      \"name\": \"a\",\n      \"label\": \"文本\",\n      \"type\": \"text\",\n      \"placeholder\": \"文本\",\n      \"value\": \"\",\n      \"size\": \"full\"\n    },\n    {\n      \"name\": \"b\",\n      \"label\": \"选项\",\n      \"type\": \"select\",\n      \"options\": [\n        \"a\",\n        \"b\",\n        \"c\"\n      ],\n      \"size\": \"full\"\n    }\n  ]\n}\n</script></div>\n<ul>\n<li><code>tabsMode</code> boolean 用来开启此模式</li>\n<li><code>tabsStyle</code> string 样式，可选：<code>line</code>、<code>card</code> 或者 <code>radio</code>.</li>\n<li><code>tabsLabelTpl</code> 用来生成标题的模板，默认为：<code>成员 ${index|plus}</code></li>\n</ul>\n<p>注意：这是新引入的功能，目前还不支持拖拽组合使用。且此模式只有多选时才能生效。</p>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/Form/Combo.md\">/docs/renderers/Form/Combo.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Combo",
          "fragment": "combo",
          "fullPath": "#combo",
          "level": 3,
          "children": [
            {
              "label": "单行模式",
              "fragment": "%E5%8D%95%E8%A1%8C%E6%A8%A1%E5%BC%8F",
              "fullPath": "#%E5%8D%95%E8%A1%8C%E6%A8%A1%E5%BC%8F",
              "level": 4
            },
            {
              "label": "多行模式。",
              "fragment": "%E5%A4%9A%E8%A1%8C%E6%A8%A1%E5%BC%8F-",
              "fullPath": "#%E5%A4%9A%E8%A1%8C%E6%A8%A1%E5%BC%8F-",
              "level": 4
            },
            {
              "label": "条件分支",
              "fragment": "%E6%9D%A1%E4%BB%B6%E5%88%86%E6%94%AF",
              "fullPath": "#%E6%9D%A1%E4%BB%B6%E5%88%86%E6%94%AF",
              "level": 4
            },
            {
              "label": "Tabs 模式",
              "fragment": "tabs-%E6%A8%A1%E5%BC%8F",
              "fullPath": "#tabs-%E6%A8%A1%E5%BC%8F",
              "level": 4
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
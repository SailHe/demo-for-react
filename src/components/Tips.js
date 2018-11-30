{/*
<Upload.Image
// @see https://sheinsight.github.io/shineout/1.1.x/#/components/Upload json-server 文件上传接口 OSS
action="http://meilijian.oss-cn-hangzhou.aliyuncs.com"
accept="image/*"
name="file"
// 返回一个含有data属性的js对象
onSuccess={(res, file, data) => ({data})}
onError={(xhr) => {
  console.log('图片上传失败');
  if (xhr.status === 404) {
    return 'Url not found.';
  }
  return 'Upload Fail.';
}}
// 使用上面的对象中的data属性渲染页面
renderResult={f => f.data}
limit={1}
validator={{
  size: s => (s > 20 * 1024 * 1024 ? new Error('最大20MB') : undefined),
}}
/>
*/}

0. pull latest code từ main về

```
git checkout main
git pull
```

1. tách branch từ main, tên branch = chủ đề / tên bài không có số thứ tự

```
git checkout -b data_struct_and_algorithm/array
```

2. Tạo file js tương ứng với file md bài tập, vd làm bài 1_array.md thì tạo file 1_array.js

```
touch folder_name/file_name.js
```

3. Code xong rồi thì commit bằng lệnh

```
git add .
git commit -m "complete lab <tên bài>"
```

4. Push lên server

```
git push
```

5. Tạo pull request từ branch vừa push lên vào main https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request

Xong, giờ thì đợi review

---
title: First Kubernetes Deployment
date: 2019-02-01
tags: ["kubernetes", "code"]
---

First application on Kubernetes using Kubernetes deployments

<!--more-->

```sh
# Run the Kubernetes deployment
kubectl run kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1 --port=8080

# Get the list of pods
kubectl get pods
NAME                                   READY     STATUS    RESTARTS   AGE
kubernetes-bootcamp-5c69669756-wv2rp   1/1       Running   0          11s
# Check the logs of the running pod
kubectl logs kubernetes-bootcamp-5c69669756-wv2rp
### Penjelasan
- **Header**: Menggunakan `---` untuk mendefinisikan metadata dokumen seperti judul, tanggal, dan tag.
- **Perintah Shell**: Menggunakan blok kode shell untuk menunjukkan perintah yang perlu dijalankan.
- **Output**: Menyediakan contoh output yang diharapkan untuk memberikan konteks bagi pengguna.

Jika ada bagian tambahan yang Anda butuhkan atau pertanyaan lain, silakan beri tahu!

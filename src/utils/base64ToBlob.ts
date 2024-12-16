function base64ToBlob(base64: string): Blob {
    const [, imageSrcB64] = base64.split(",", 2);
    const bstr = atob(imageSrcB64);
    const u8arr = new Uint8Array(bstr.length);
    for (let i = 0; i < bstr.length; i++) {
        u8arr[i] = bstr.charCodeAt(i);
    }

    return new Blob([u8arr], { type: "image/jpeg" })
}

export default base64ToBlob
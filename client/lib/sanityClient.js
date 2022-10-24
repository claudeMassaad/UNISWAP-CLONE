import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "sx1a68va",
  dataset: "production",
  apiVersion: "v1",
  token:
    "sk0hErA0XtI0pxPBoOsfun9rD0FK5gDCY3CgGna2j6DwcD84XG0sVMT1Duh00OeKmY0L2ajtuHG8CtkAoy4jSser3AOtLb0bZK2NbBGSy1ZXocAO8X9LwdGsFDtGzzVLLDi1zW76hsQoJass12gOgG5yVngzUZdVkIoLVaUuYCuEMg8Vdq8t",
  useCdn: false,
});

type caseCard = {
  id: number,
  title: string,
  slug: string,
  project_url: string,
  image: string,
  image_dark: string,
  description: string,
  geo: {
    lat: string,
    lng: string,
  }
  categories: Category[],
}
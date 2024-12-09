import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { newsData } from "@/lib/news-data";

export function NewsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Últimas Notícias</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <Card key={news.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{news.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{news.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{news.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
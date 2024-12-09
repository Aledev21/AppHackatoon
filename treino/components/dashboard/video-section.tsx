import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { videosData } from "@/lib/videos-data";

export function VideoSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Vídeos em Destaque</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {videosData.map((video) => (
          <Card key={video.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-md"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
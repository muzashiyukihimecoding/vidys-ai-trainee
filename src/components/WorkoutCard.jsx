export default function WorkoutCard({ title, kcal, time, image }) {
   return (
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform cursor-pointer">
         {/* Gambar */}
         <img src={image} alt={title} className="w-full h-40 object-cover" />

         {/* Info */}
         <div className="p-4">
            <h4 className="text-lg font-semibold">{title}</h4>
            <div className="flex items-center text-sm text-gray-400 mt-2 gap-4">
               <span>🔥 {kcal} kcal</span>
               <span>⏱ {time}</span>
            </div>
         </div>
      </div>
   );
}

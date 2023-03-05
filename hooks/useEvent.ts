import { useEffect, useState } from "react";

export const useEvent = () => {
  const [list, setList] = useState<MissionList[]>();
  const [channel, setChannel] = useState<Channel[]>([]);
  const [eventData, setEventData] = useState<MissionList | null>(null);
  const [rendEvent, setRendEvent] = useState<MissionList[]>([]);

  useEffect(() => {
    if (rendEvent.length === 0) setEventData(null);
  }, [rendEvent]);
  useEffect(() => {
    console.log(eventData);
  }, [eventData]);
  const init = async (guildId: string) => {
    const res = await fetch("/api/regist", {
      body: JSON.stringify({ guildId: guildId }),
      method: "POST",
    }).then((res) => res.json());

    // console.log(res.data);
    if (res.data && res.data.length > 0) {
      setList(res.data[0].list);
    } else setList([]);

    const channel = await fetch("/api/channel", {
      body: JSON.stringify({ guildId: guildId }),
      method: "POST",
    }).then((res) => res.json());

    if (channel.status === 200) {
      const resChannel = channel.channel.filter((x: Channel) => x.type === 0);
      console.log(resChannel);
      setChannel([...resChannel]);
    }
  };

  const regist = async (guildId: string, del?: boolean) => {
    if (del) {
      const res = await fetch("/api/regist", {
        body: JSON.stringify({ ...eventData, guild: guildId, delete: true }),
        method: "POST",
      }).then((res) => res.json());

      if (res.data && res.data.length > 0) {
        setList(res.data[0].list);
      } else setList([]);
    } else {
      const res = await fetch("/api/regist", {
        body: JSON.stringify({ ...eventData, guild: guildId }),
        method: "POST",
      }).then((res) => res.json());

      if (res.data && res.data.length > 0) {
        setList(res.data[0].list);
      } else setList([]);
    }
  };

  useEffect(() => {
    console.log(list);
  }, [list]);
  return {
    init,
    eventList: list,
    eventData,
    setEventData,
    channel,
    rendEvent,
    setRendEvent,
    regist,
  };
};

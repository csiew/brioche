import "../../App.css";

export function MainSidebarView({
  className,
  mainClassName,
  sidebarClassName,
  main,
  sidebar,
}) {
  return (
    <div className={`width-full responsive-row margin-auto-horizontal padding-s-left padding-s-right ${className ? className : ''}`}>
      <div
        className={`width-full height-auto padding-s padding-m-top grid grid-col-1 grid-gap-xl ${mainClassName ? mainClassName : ''}`}
        style={{
          flexGrow: "2",
          flexShrink: "1"
        }}
      >
        {main}
      </div>
      {
        sidebar ?
          <div
            className={`width-full height-auto padding-s padding-m-top grid grid-col-1 grid-gap-xl ${sidebarClassName ? sidebarClassName : ''}`}
            style={{
              flexGrow: "1",
              flexShrink: "2"
            }}
          >
            {sidebar}
          </div>
        :
          ''
      }
    </div>
  )
}

export function DynamicPageView({
  className,
  mainClassName,
  sidebarClassName,
  header,
  main,
  sidebar,
}) {
  return (
    <div className={`width-full margin-auto-horizontal grid grid-col-1 ${className ? className : ''}`}>
      {header}
      <MainSidebarView
        mainClassName={mainClassName}
        sidebarClassName={sidebarClassName}
        main={main}
        sidebar={sidebar}
      />
    </div>
  );
}
